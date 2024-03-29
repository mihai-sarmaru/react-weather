import { IForecastWeather, IHourlyWeather, IWeather, IWeatherDescription } from "../models/Weather"

export const mapIWeather = (weather: any, locationName = ''): IWeather => {
    const coords = mapIWeatherCoordinates(weather, locationName);
    const current = mapICurrentWeather(weather.current);
    const hourly = mapIHourlyWeather(weather.hourly);
    const fcst = mapIForecastWeather(weather.daily);
    
    const convertedWeather: IWeather = {
        coordinates: coords,
        currentWeather: current,
        hourlyWeather: hourly,
        forecast: fcst
    }

    return convertedWeather;
}

const mapIWeatherCoordinates = (coord: any, locationName: string) => {
    return {
        latitude: coord.lat,
        longitude: coord.lon,
        timezoneOffset: coord.timezone_offset * 1000,
        locationName: locationName
    }
}

const mapICurrentWeather = (current: any) => {
    const weatherDesc = mapIWeatherDescription(current.weather);
    return {
        dt: current.dt * 1000,
        sunrise: current.sunrise * 1000,
        sunset: current.sunset * 1000,
        temp: current.temp.toFixed(0) === '-0' ? 0 : current.temp.toFixed(0),
        feelsLike: current.feels_like.toFixed(0) === '-0' ? 0 : current.feels_like.toFixed(0),
        pressure: current.pressure,
        humidity: current.humidity,
        dewPoint: current.dew_point.toFixed(0) === '-0' ? 0 : current.dew_point.toFixed(0),
        uvi: current.uvi,
        clouds: current.clouds,
        visibility: current.visibility / 1000,
        windSpeed: current.wind_speed.toFixed(0),
        weather: weatherDesc
    }
}

const mapIWeatherDescription = (weather: any[]) => {
    return weather.map(wdesc => {
        return ({
            id: wdesc.id,
            main: wdesc.main,
            description: wdesc.description,
        } as IWeatherDescription);
    });
}

const mapIHourlyWeather = (hourlyWeather: any[]) => {
    return hourlyWeather.map(hourly => {
        return ({
            dt: hourly.dt * 1000,
            temp: hourly.temp.toFixed(0) === '-0' ? 0 : +hourly.temp.toFixed(0),
            feelsLike: hourly.feels_like.toFixed(0) === '-0' ? 0 : +hourly.feels_like.toFixed(0),
            windSpeed: +hourly.wind_speed.toFixed(0),
            precipitation: +(hourly.pop * 100).toFixed(0),
            weather: mapIWeatherDescription(hourly.weather)
        } as IHourlyWeather);
    });
}

const mapIForecastWeather = (forecastWeather: any[]) => {
    return forecastWeather.map(forecast => {
        return ({
            dt: forecast.dt * 1000,
            precipitation: +(forecast.pop * 100).toFixed(0),
            maxTemp: forecast.temp.max.toFixed(0) === '-0' ? 0 : +forecast.temp.max.toFixed(0),
            minTemp: forecast.temp.min.toFixed(0) === '-0' ? 0 : +forecast.temp.min.toFixed(0),
            windSpeed: +forecast.wind_speed.toFixed(0),
            uvi: forecast.uvi,
            clouds: forecast.clouds,
            pressure: forecast.pressure,
            sunrise: forecast.sunrise * 1000,
            sunset: forecast.sunset * 1000,
            weather: mapIWeatherDescription(forecast.weather)
        } as IForecastWeather);
    });
}