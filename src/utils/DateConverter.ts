export const UnixUTCToHourMinuteString = (utcTime: number) => {
    const date = new Date(utcTime);
    return date.getHours() + ':' + date.getMinutes();
}

export const UnixUTCToDayString = (utcTime: number) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(utcTime);
    return days[date.getDay()] + ' ' + date.getDate();
}