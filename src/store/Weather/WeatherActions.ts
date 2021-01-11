import { Dispatch } from 'redux';
import axios from '../../axios/axios-weather';
import env from '../../utils/env';
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './models/WeatherActionsModel';
import { IWeather } from './models/Weather';
import { AppActions } from '../actions';
import { mapIWeather } from './utils/WeatherMapper';

const requestWeather = (): AppActions => {
    return {
        type: FETCH_WEATHER_REQUEST,
        loading: true,
        error: '',
        weather: {} as IWeather
    }
}

const receiveWeather = (fetchedWeather: IWeather): AppActions => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        loading: false,
        error: '',
        weather: fetchedWeather
    }
}

const invalidWeather = (): AppActions => {
    return {
        type: FETCH_WEATHER_FAILURE,
        loading: false,
        error: 'Something went wrong fetching weather',
        weather: {} as any
    }
}

export const fetchWeather = (lat: number, long: number, locationName = '') => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestWeather());
        axios.get('/' + env.getApiDefaultParams(), {params: {lat: lat, lon: long}})
            .then(response => { 
                dispatch(receiveWeather(mapIWeather(response.data, locationName)));
            })
            .catch(error => {
                console.log(error.message);
                dispatch(invalidWeather());
            });
    };
}