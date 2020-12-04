import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createLogger } from 'redux-logger';
import { weatherReducer } from "./Weather/WeatherReducer";
import { AppActions } from "./actions";

const logger = createLogger();

export const rootReducer = combineReducers({
    weatherReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {}, {}>(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
);
