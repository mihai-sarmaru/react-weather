import { WeatherActionTypes, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './models/WeatherActionsModel';
import { IWeather } from './models/Weather';

interface WeatherState {
    loading: boolean;
    error: string;
    weather: IWeather;
}

const initialState: WeatherState = {
    loading: true,
    error: '',
    weather: {} as IWeather
}

const FetchWeatherRequest = () => {
    return { loading: true, error: '', weather: {} as IWeather };
}

const FetchWeatherSuccess = (action: WeatherActionTypes) => {
    return { loading: false, error: '', weather: action.weather};
}

const FetchWeatherFailure = (action: WeatherActionTypes) => {
    return { loading: false, error: action.error, weather: {} as IWeather};
}

export const weatherReducer = (state = initialState, action: WeatherActionTypes): WeatherState => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST: return FetchWeatherRequest();
        case FETCH_WEATHER_SUCCESS: return FetchWeatherSuccess(action);
        case FETCH_WEATHER_FAILURE: return FetchWeatherFailure(action);
        default:
          return state;
    }
}