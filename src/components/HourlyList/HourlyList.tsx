import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import * as WiIcons from 'react-icons/wi';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { IHourlyWeather } from '../../store/Weather/models/Weather';
import { UnixUTCHourStringFakeMinutes } from '../../utils/DateConverter';
import ClockIcon from '../ClockIcon/ClockIcon';

interface HourlyListProps {
    hourly: IHourlyWeather;
}

const HourlyList: React.FC<HourlyListProps> = (props) => {
    return(
        <div style={{display: 'flex', justifyContent:'center', marginRight: '20px'}}>
            <Grid xs={1} style={{width: '100%'}} />
            <Grid container spacing={2} style={{alignItems: 'center', margin: '3px 0', width: '90%'}}>
                <Grid xs={3} style={{display: 'flex', justifyContent:'left'}}>
                    <ClockIcon dt={props.hourly.dt} size={25} />
                    <Typography variant='body1'>{UnixUTCHourStringFakeMinutes(props.hourly.dt)}</Typography>
                </Grid>
                <Grid xs={1}>
                    <WeatherIcon iconId={props.hourly.weather[0].id} day={true} size={35} />
                </Grid>
                <Grid xs={3} style={{width: '100%'}} />
                <Grid xs={3} style={{display: 'flex', justifyContent:'left'}}>
                    <WiIcons.WiUmbrella size={25} color='#666' />
                    <Typography variant='body1'>{props.hourly.precipitation}%</Typography>
                </Grid>
                <Grid xs={2} style={{display: 'flex', justifyContent:'left'}}>
                    <WiIcons.WiThermometer size={25} color='#86c3d6' />
                    <Typography variant='body1'>{props.hourly.temp}°</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default HourlyList;