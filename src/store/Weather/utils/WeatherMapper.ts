import { IWeather, IWeatherDescription } from "../models/Weather"

export const mapIWeather = (weather: any): IWeather => {
    const current = mapICurrentWeather(weather.current);
    
    const convertedWeather: IWeather = {
        currentWeather: current
    }

    return convertedWeather;
}

const mapICurrentWeather = (current: any) => {
    const weatherDesc = mapIWeatherDescription(current.weather);
    return {
        dt: current.dt,
        sunrise: current.sunrise,
        sunset: current.sunset,
        temp: current.temp,
        feelsLike: current.feels_like,
        pressure: current.pressure,
        humidity: current.humidity,
        dewPoint: current.dew_point,
        uvi: current.uvi,
        clouds: current.clouds,
        visibility: current.visibility,
        windSpeed: current.wind_speed,
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