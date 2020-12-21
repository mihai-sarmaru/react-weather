import React from "react";
import 'fontsource-roboto';
import { Grid, Typography } from "@material-ui/core";
import { Spring } from 'react-spring/renderprops';

import WeatherIcon from '../WeatherIcon/WeatherIcon';

interface CurrentWeatherProps {
    temperature: number,
    feelsLike: number,
    description: string,
    weatherIconId: number,
    day: boolean
}

const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {
    return (
        <Grid container spacing={2} style={{marginBottom: '40px', width: '98%'}}>
            <Grid item xs={6}>
                <div style={{textAlign: 'right'}}>
                    <WeatherIcon iconId={props.weatherIconId} day={props.day} size={140}/>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{textAlign: 'left'}}>
                    <Spring
                        from={{number: 0}}
                        to={{number: props.temperature}}>
                            {props => <Typography variant='h2' className='typography-primary'>{props.number.toFixed()}°</Typography> }
                    </Spring>
                    <Typography variant='h6' className='typography-primary'>Feels like {props.feelsLike}°</Typography>
                    <Typography variant='subtitle1' className='typography-secondary'>{props.description}</Typography>
                </div>
            </Grid>
        </Grid>
    );
};

export default CurrentWeather;
