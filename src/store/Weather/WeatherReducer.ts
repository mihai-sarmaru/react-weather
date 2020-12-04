import { WeatherActionTypes, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './models/WeatherActionsModel';
import { IWeather } from './models/Weather';

interface WeatherState {
    loading: boolean;
    error: string;
    weather: IWeather;
}

const initialState: WeatherState = {
    loading: false,
    error: '',
    weather: {} as IWeather
}

export const weatherReducer = (state = initialState, action: WeatherActionTypes): WeatherState => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
          return { loading: true, error: '', weather: {} as IWeather };
        case FETCH_WEATHER_SUCCESS:
          return { loading: false, error: '', weather: action.weather};
        case FETCH_WEATHER_FAILURE:
          return { loading: false, error: action.error, weather: {} as IWeather};
        default:
          return state;
    }
}