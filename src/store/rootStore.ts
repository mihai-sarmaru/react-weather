import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createLogger } from 'redux-logger';
import { weatherReducer } from "./Weather/WeatherReducer";
import { localizationReducer } from './Localization/LocalizationReducer';
import { AppActions } from "./actions";

const logger = createLogger();

let middleware = [];
if (process.env.NODE_ENV === 'development') {
    middleware = [thunk as ThunkMiddleware<AppState, AppActions>, logger];
} else {
    middleware = [thunk as ThunkMiddleware<AppState, AppActions>];
}

export const rootReducer = combineReducers({
    weatherReducer, localizationReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {}, {}>(
    rootReducer,
    applyMiddleware(...middleware)
);
