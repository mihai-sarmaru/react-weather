import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../store/rootStore';
import { AppActions } from '../../store/actions';
import { Languages } from '../../localization/model/localizationModel';
import { changeLanguage } from '../../store/Localization/LocalizationActions';

const LanguageOptions = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);
    const dispatch = useDispatch<ThunkDispatch<AppState, {}, AppActions>>();

    const handleSelectedLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = +(event.target as HTMLInputElement).value;
        dispatch(changeLanguage(value === 0 ? 'english' : 'romanian'));
    }

    return(
        <div style={{width: '70%', margin: '10px auto'}}>
             <FormControl component="fieldset">
                <FormLabel component="legend">{localization.language.get('options-lang-title')}</FormLabel>
                <RadioGroup aria-label="language" name="language" value={localization.selected} onChange={handleSelectedLanguage} >
                    <FormControlLabel value={Languages.ENGLISH} control={<Radio />} label={localization.language.get('options-lang-en')} />
                    <FormControlLabel value={Languages.ROMANIAN} control={<Radio />} label={localization.language.get('options-lang-ro')} />
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default LanguageOptions;