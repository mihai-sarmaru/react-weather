import React from 'react';
import * as env from '../../utils/env';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const GooglePlaces = () => {
    return(
        <div>
            <GooglePlacesAutocomplete apiKey={env.default.getApiLocK()}
                minLengthAutocomplete={3}
                debounce={500}
                selectProps={{
                    placeholder: 'Search...',
                    onChange: (result: any) => console.log(result)
                }} />
        </div>
    );
}

export default GooglePlaces;