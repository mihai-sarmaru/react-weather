import { ILocalization } from '../../../localization/model/localizationModel';

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

interface Localization {
    language: ILocalization;
}

interface ChangeLanguage extends Localization {
    type: typeof CHANGE_LANGUAGE;
}

export type LocalizationActionTypes = ChangeLanguage;