import { IHourlyWeather, IWeather, IWeatherDescription } from "../models/Weather"

export const mapIWeather = (weather: any): IWeather => {
    const coords = mapIWeatherCoordinates(weather);
    const current = mapICurrentWeather(weather.current);
    const hourly = mapIHourlyWeather(weather.hourly);
    
    const convertedWeather: IWeather = {
        coordinates: coords,
        currentWeather: current,
        hourlyWeather: hourly
    }

    return convertedWeather;
}

const mapIWeatherCoordinates = (coord: any) => {
    return {
        latitude: coord.lat,
        longitude: coord.lon,
        timezoneOffset: coord.timezone_offset * 1000
    }
}

const mapICurrentWeather = (current: any) => {
    const weatherDesc = mapIWeatherDescription(current.weather);
    return {
        dt: current.dt * 1000,
        sunrise: current.sunrise * 1000,
        sunset: current.sunset * 1000,
        temp: current.temp.toFixed(0),
        feelsLike: current.feels_like.toFixed(0),
        pressure: current.pressure,
        humidity: current.humidity,
        dewPoint: current.dew_point.toFixed(0),
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
            temp: hourly.temp.toFixed(0),
            windSpeed: hourly.wind_speed.toFixed(0),
            precipitation: hourly.pop,
            weather: mapIWeatherDescription(hourly.weather)
        } as IHourlyWeather);
    });
}