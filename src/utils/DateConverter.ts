export const UnixUTCToHourMinuteString = (utcTime: number) => {
    const date = new Date(utcTime);
    return date.getHours() + ':' + date.getMinutes();
}

export const UnixUTCToDayString = (utcTime: number) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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