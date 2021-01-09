import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';


export interface Location {
    name: string;
    lat: number;
    long: number;
}

export const AddLocationToLocalStorage = async (locationLabel: string) => {
    const localStorageLocations = localStorage.getItem('locations');
    const location = await getLocation(locationLabel);

    let locations: Location[] = [];
    if (localStorageLocations !== null) {
        locations = JSON.parse(localStorageLocations) as Location[];
        if (!locationExists(locationLabel, locations)) {
            if (locations.length >= 3) locations.pop();
            locations.unshift(location);
        }
    } else {
        locations.push(location);
    }

    if (!locationExists(locationLabel, locations)) {
        localStorage.setItem('locations', JSON.stringify(locations));
    }
}

const locationExists = (locationLabel: string, locations: Location[]) => {
    for (const loc of locations) {
        if (locationLabel === loc.name) return true;
    }
    return false;
}

const getLocation = async (label: string): Promise<Location> => {
    return new Promise((resolve, reject) => {

        geocodeByAddress(label)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                resolve({name: label, lat: lat, long: lng});
            });

    });
}