import React from 'react';
import * as env from '../../utils/env';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';
import { AddLocationToLocalStorage } from '../../utils/LocationUtils';

const GooglePlaces = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    const onLocationSelected = (result: any) => {
        console.log(result);
        AddLocationToLocalStorage(result.label);
    }

    return(
        <div>
            <GooglePlacesAutocomplete apiKey={env.default.getApiLocK()}
                minLengthAutocomplete={3}
                debounce={500}
                autocompletionRequest={{
                    types: ["geocode"]
                }}
                selectProps={{
                    placeholder: `${localization.language.get('search-placeholder')}`,
                    onChange: onLocationSelected
                }} />
        </div>
    );
}

export default GooglePlaces;