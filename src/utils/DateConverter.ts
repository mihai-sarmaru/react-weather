export const UnixUTCToHourMinuteString = (utcTime: number) => {
    const date = new Date(utcTime);
    return date.getHours() + ':' + date.getMinutes();
}