import { ILocalization } from "../localization/model/localizationModel";

export const UnixUTCToHourMinuteString = (utcTime: number) => {
    const date = new Date(utcTime);
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    return hours + ':' + minutes;
}

export const UnixUTCToDayString = (utcTime: number, localization: ILocalization) => {
    const days = localization.weekArray;
    const date = new Date(utcTime);
    return days[date.getDay()] + ' ' + date.getDate();
}

export const UnixUTCHourString = (utcTime: number) => {
    const date = new Date(utcTime);
    return date.getHours();
}

export const UnixUTCHourStringFakeMinutes = (utcTime: number) => {
    const date = new Date(utcTime);
    return date.getHours() + ':00';
}

export const UnixUTCDayIcon = (utcTime: number, sunrise: number, sunset: number) => {
    return (utcTime > sunrise && utcTime < sunset); 
}

export const UnixUTCToDayOfMonth = (utcTime: number) => {
    const date = new Date(utcTime);
    return date.getDate();
}