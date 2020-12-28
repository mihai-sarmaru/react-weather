import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

const LanguageOptions = () => {
    return(
        <div style={{width: '70%', margin: '10px auto'}}>
             <FormControl component="fieldset">
                <FormLabel component="legend">Weather language</FormLabel>
                <RadioGroup aria-label="language" name="language" value='english'>
                    <FormControlLabel value="english" control={<Radio />} label="English" />
                    <FormControlLabel value="romanian" control={<Radio />} label="Romanian" />
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default LanguageOptions;