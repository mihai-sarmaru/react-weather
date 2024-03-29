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
    feelsLike: number;
    windSpeed: number;
    precipitation: number;
    weather: IWeatherDescription[];
}

export interface IForecastWeather {
    dt: number;
    precipitation: number;
    maxTemp: number;
    minTemp: number;
    windSpeed: number;
    uvi: number;
    clouds: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    weather: IWeatherDescription[];
}

export interface IWeatherCoordinates {
    latitude: number;
    longitude: number;
    timezoneOffset: number;
    locationName: string;
}

export interface IWeather {
    coordinates: IWeatherCoordinates;
    currentWeather: ICurrentWeather;
    hourlyWeather: IHourlyWeather[];
    forecast: IForecastWeather[];
}
