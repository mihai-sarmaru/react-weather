import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';

const LanguageOptions = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    return(
        <div style={{width: '70%', margin: '10px auto'}}>
             <FormControl component="fieldset">
                <FormLabel component="legend">{localization.language.get('options-lang-title')}</FormLabel>
                <RadioGroup aria-label="language" name="language" value='english'>
                    <FormControlLabel value="english" control={<Radio />} label={localization.language.get('options-lang-en')} />
                    <FormControlLabel value="romanian" control={<Radio />} label={localization.language.get('options-lang-ro')} />
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default LanguageOptions;