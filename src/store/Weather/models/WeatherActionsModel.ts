import { IWeather } from "./Weather";

export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

interface WeatherAsync {
    loading: boolean;
    error: string;
    weather: IWeather;
}

interface FetchWeatherRequest extends WeatherAsync {
    type: typeof FETCH_WEATHER_REQUEST;
}
interface FetchWeatherSuccess extends WeatherAsync {
    type: typeof FETCH_WEATHER_SUCCESS;
}
interface FetchWeatherFailure extends WeatherAsync {
    type: typeof FETCH_WEATHER_FAILURE;
}

export type WeatherActionTypes =
    | FetchWeatherRequest
    | FetchWeatherSuccess
    | FetchWeatherFailure; // | PostWeather ...
