import React from 'react';
import * as env from '../../utils/env';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';

const GooglePlaces = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    return(
        <div>
            <GooglePlacesAutocomplete apiKey={env.default.getApiLocK()}
                minLengthAutocomplete={3}
                debounce={500}
                selectProps={{
                    placeholder: `${localization.language.get('search-placeholder')}`,
                    onChange: (result: any) => console.log(result)
                }} />
        </div>
    );
}

export default GooglePlaces;