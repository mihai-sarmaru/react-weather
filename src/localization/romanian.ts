import { ILocalization, Languages } from "./model/localizationModel";

let languageMap = new Map<string, string>();

// loading
languageMap.set('loading', 'Se incarcă vremea');

// navigation
languageMap.set('nav-now', 'Acum');
languageMap.set('nav-hourly', 'Urmează');
languageMap.set('nav-later', 'Viitor');
languageMap.set('nav-settings', 'Setări');

// drawer
languageMap.set('drawer-back', 'Înapoi');
languageMap.set('drawer-location', 'Locația curentă');

// current weather
languageMap.set('current-feels', 'Se simte');

// detail weather
languageMap.set('detail-chance', 'Șanse');
languageMap.set('detail-wind', 'Vânt');
languageMap.set('detail-uv', 'Index UV');
languageMap.set('detail-cloud', 'Acoperire');
languageMap.set('detail-pressure', 'Presiune');
languageMap.set('detail-humidity', 'Umiditate');
languageMap.set('detail-dew', 'Condens');
languageMap.set('detail-visibility', 'Vizibilitate');
languageMap.set('detail-sunrise', 'Răsărit');
languageMap.set('detail-sunset', 'Apus');

// chart tooltip
languageMap.set('chart-tooltip-temperature', 'Temperatură');
languageMap.set('chart-tooltip-wind', 'Vânt');
languageMap.set('chart-tooltip-precipitation', 'Precipitație');

// chart X axis
languageMap.set('chart-axis-now', 'Acum');
languageMap.set('chart-axis-24', '24 ore');
languageMap.set('chart-axis-48', '48 ore');

// more less toggle button
languageMap.set('toggle-more', 'Mai Mult');
languageMap.set('toggle-less', 'Mai Puțin');

// search
languageMap.set('search-placeholder', 'Caută...');

// options
languageMap.set('options-lang-title', 'Schimbă limba');
languageMap.set('options-lang-en', 'Engleză');
languageMap.set('options-lang-ro', 'Romană');

// about
languageMap.set('about-built', 'Construit cu ');
languageMap.set('about-by', ' de ');

// week days array
const weekDays = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'];

const selectedLanguage = Languages.ROMANIAN;

export const localization: ILocalization = {
    language: languageMap,
    weekArray: weekDays,
    selected: selectedLanguage
}