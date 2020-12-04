export interface IWeatherDescription {
    id: number;
    main: string;
    description: string;
}

export interface ICurrentWeather {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feelsLike: number;
    pressure: number;
    humidity: number;
    dewPoint: number;
    uvi: number;
    clouds: number;
    visibility: number;
    windSpeed: number;
    weather: IWeatherDescription[];
}

export interface IWeather {
    currentWeather: ICurrentWeather;
}
