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

export interface IHourlyWeather {
    dt: number;
    temp: number;
    windSpeed: number;
    precipitation: number;
    weather: IWeatherDescription[];
}

export interface IWeatherCoordinates {
    latitude: number;
    longitude: number;
    timezoneOffset: number;
}

export interface IWeather {
    coordinates: IWeatherCoordinates;
    currentWeather: ICurrentWeather;
    hourlyWeather: IHourlyWeather[];
}
