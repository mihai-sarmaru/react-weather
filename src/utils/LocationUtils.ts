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
        locations = JSON.parse(localStorageLocations);
        locations.push(location);
    } else {
        locations.push(location);
    }

    localStorage.setItem('locations', JSON.stringify(locations));
}

const getLocation = async (label: string): Promise<Location> => {
    return new Promise((resolve, reject) => {

        geocodeByAddress(label)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                console.log('Successfully got latitude and longitude', { lat, lng });
                resolve({name: label, lat: lat, long: lng});
            });

    });
}