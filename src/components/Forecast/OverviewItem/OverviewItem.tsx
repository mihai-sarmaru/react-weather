import React from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import * as WiIcon from 'react-icons/wi'
import * as Icon from 'react-icons/md'
import WeatherIcon from '../../WeatherIcon/WeatherIcon';

const OverviewItem = () => {
    return (
        <Grid container spacing={4} style={{margin: 'auto', width: '80%'}}>
            <Grid item xs={2}>
                <div style={{textAlign: 'right'}}>
                    <WeatherIcon iconId={800} size={58}/>
                </div>
            </Grid>
            <Grid item xs={8}>
                <div style={{textAlign: 'left'}}>
                    <Typography variant='h6'><strong>Wednesday 27</strong></Typography>
                    <div style={{display: 'flex'}}>
                        <WiIcon.WiUmbrella size={20} />
                        <Typography variant='subtitle2' style={{marginRight: '20px'}}>25%</Typography>
                        <WiIcon.WiThermometer size={20} />
                        <Typography variant='subtitle2'>7° | 12°</Typography>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <IconButton>
                    <Icon.MdExpandMore size={32} />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default OverviewItem;