import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

export interface Location {
    name: string;
    lat: number;
    long: number;
}

export const addLocationToLocalStorage = async (locationLabel: string) => {
    const localStorageLocations = localStorage.getItem('locations');
    const location = await getLocation(locationLabel);

    let locations: Location[] = [];
    let locExists = true;

    if (localStorageLocations !== null) {
        locations = JSON.parse(localStorageLocations) as Location[];
        if (!locationExists(locationLabel, locations)) {
            locExists = false;
            if (locations.length >= 3) locations.pop();
            locations.unshift(location);
        }
    } else {
        locations.push(location);
        locExists = false;
    }

    if (!locExists) {
        localStorage.setItem('locations', JSON.stringify(locations));
    }

    addToCurrentLocation(location);
}

export const getLocationsFromStorage = (): null | Location[] => {
    const localStorageLocations = localStorage.getItem('locations');
    return localStorageLocations !== null ? JSON.parse(localStorageLocations) as Location[] : null;
}

export const getCurrentSavedLocationFromStorage = () => {
    const localStorageCurrentLocation = localStorage.getItem('current_location');
    return localStorageCurrentLocation !== null ? JSON.parse(localStorageCurrentLocation) as Location : null;
}

const addToCurrentLocation = (location: Location) => {
    localStorage.setItem('current_location', JSON.stringify(location));
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