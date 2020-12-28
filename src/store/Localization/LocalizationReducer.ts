import { ILocalization } from "../../localization/model/localizationModel";
import * as English from '../../localization/english';
import { CHANGE_LANGUAGE, LocalizationActionTypes } from "./models/LocalizationActionsModel";

interface LocalizationState {
    language: ILocalization;
}

const initialState: LocalizationState = {
    language: English.localization
}

const ChangeLanguage = (action: LocalizationActionTypes) => {
    return { language: action.language };
}

export const localizationReducer = (state = initialState, action: LocalizationActionTypes): LocalizationState => {
    switch (action.type) {
        case CHANGE_LANGUAGE: return ChangeLanguage(action);
        default:
          return state;
    }
}