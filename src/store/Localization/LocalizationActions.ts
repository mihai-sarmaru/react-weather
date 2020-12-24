import { AppActions } from "../actions";
import { CHANGE_LANGUAGE } from "./models/LocalizationActionsModel";

import * as English from '../../localization/english';
import * as Romanian from '../../localization/romanian';

export const changeLanguage = (lang: string): AppActions => {
     return {
        type: CHANGE_LANGUAGE,
        language: lang === 'english' ? English.localization : Romanian.localization
     }
}