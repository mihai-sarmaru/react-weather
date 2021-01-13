import { Typography, Grid, Switch } from '@material-ui/core';
import React from 'react';

const BackgroundImageToggle = () => {
    return(
        <div style={{margin: '10px 0', padding: '0 20px', width: '90%'}}>
            <Grid container style={{display: 'flex', justifyContent:'left', alignItems: 'center'}}>
                <Grid item xs={9} style={{textAlign: 'left'}}>
                    <Typography variant='body1'>Unsplash background</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Switch color='secondary' />
                </Grid>
            </Grid>
        </div>
    );
}

export default BackgroundImageToggle;