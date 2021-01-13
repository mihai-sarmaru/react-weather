import React, { useEffect, useState } from 'react';
import { Typography, Grid, Switch } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';
import { getUnsplashOption } from '../../utils/ImageUtil';

const BackgroundImageToggle = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    const [option, setOption] = useState(false);

    useEffect(() => {
        setOption(getUnsplashOption());
    }, []);

    return(
        <div style={{margin: '10px 0', padding: '0 20px', width: '90%'}}>
            <Grid container style={{display: 'flex', justifyContent:'left', alignItems: 'center'}}>
                <Grid item xs={9} style={{textAlign: 'left'}}>
                    <Typography variant='body1'>{localization.language.get('unsplash')}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Switch color='secondary' checked={option} />
                </Grid>
            </Grid>
        </div>
    );
}

export default BackgroundImageToggle;