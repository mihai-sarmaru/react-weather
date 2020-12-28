import { ILocalization, Languages } from "./model/localizationModel";

let languageMap = new Map<string, string>();

// loading
languageMap.set('loading', 'Fetching weather');

// navigation
languageMap.set('nav-now', 'Now');
languageMap.set('nav-hourly', 'Hourly');
languageMap.set('nav-later', 'Later');

// current weather
languageMap.set('current-feels', 'Feels like');

// detail weather
languageMap.set('detail-chance', 'Chance');
languageMap.set('detail-wind', 'Wind speed');
languageMap.set('detail-uv', 'UV Index');
languageMap.set('detail-cloud', 'Cloud cover');
languageMap.set('detail-pressure', 'Pressure');
languageMap.set('detail-humidity', 'Humidity');
languageMap.set('detail-dew', 'Dew point');
languageMap.set('detail-visibility', 'Visibility');
languageMap.set('detail-sunrise', 'Sunrise');
languageMap.set('detail-sunset', 'Sunset');

// chart tooltip
languageMap.set('chart-tooltip-temperature', 'Temperature');
languageMap.set('chart-tooltip-wind', 'Wind speed');
languageMap.set('chart-tooltip-precipitation', 'Precipitation');

// chart X axis
languageMap.set('chart-axis-now', 'Now');
languageMap.set('chart-axis-24', '24h');
languageMap.set('chart-axis-48', '48h');

// more less toggle button
languageMap.set('toggle-more', 'More');
languageMap.set('toggle-less', 'Less');

// options
languageMap.set('options-lang-title', 'Weather language');
languageMap.set('options-lang-en', 'English');
languageMap.set('options-lang-ro', 'Romanian');

// week days array
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const selectedLanguage = Languages.ENGLISH;

export const localization: ILocalization = {
    language: languageMap,
    weekArray: weekDays,
    selected: selectedLanguage
}