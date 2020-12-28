import { WeatherActionTypes } from "./Weather/models/WeatherActionsModel";
import { LocalizationActionTypes } from "./Localization/models/LocalizationActionsModel";

export type AppActions = WeatherActionTypes | LocalizationActionTypes; // | DetailActionTypes ...
