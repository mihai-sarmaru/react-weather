export const regionRomania = (lat: number, long: number) => {
    if (lat > 43.38 && lat < 48.16) {
        if (long > 20.16 && long < 29.42) {
            return true;
        }
    }
    return false;
}