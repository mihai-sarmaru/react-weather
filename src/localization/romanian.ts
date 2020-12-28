import { ILocalization, Languages } from "./model/localizationModel";

let languageMap = new Map<string, string>();

// navigation
languageMap.set('nav-now', 'Acum');
languageMap.set('nav-hourly', 'Urmeaza');
languageMap.set('nav-later', 'Viitor');

// current weather
languageMap.set('current-feels', 'Se simte');

// detail weather
languageMap.set('detail-chance', 'Sanse');
languageMap.set('detail-wind', 'Vant');
languageMap.set('detail-uv', 'Index UV');
languageMap.set('detail-cloud', 'Acoperire');
languageMap.set('detail-pressure', 'Presiune');
languageMap.set('detail-humidity', 'Umiditate');
languageMap.set('detail-dew', 'Condens');
languageMap.set('detail-visibility', 'Visibilitate');
languageMap.set('detail-sunrise', 'Rasarit');
languageMap.set('detail-sunset', 'Apus');

// chart tooltip
languageMap.set('chart-tooltip-temperature', 'Temperatura');
languageMap.set('chart-tooltip-wind', 'Vant');
languageMap.set('chart-tooltip-precipitation', 'Precipitatie');

// chart X axis
languageMap.set('chart-axis-now', 'Acum');
languageMap.set('chart-axis-24', '24 ore');
languageMap.set('chart-axis-48', '48 ore');

// more less toggle button
languageMap.set('toggle-more', 'Mai Mult');
languageMap.set('toggle-less', 'Mai Putin');

// options
languageMap.set('options-lang-title', 'Schimba limba');
languageMap.set('options-lang-en', 'Engleza');
languageMap.set('options-lang-ro', 'Romana');

// week days array
const weekDays = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];

const selectedLanguage = Languages.ROMANIAN;

export const localization: ILocalization = {
    language: languageMap,
    weekArray: weekDays,
    selected: selectedLanguage
}