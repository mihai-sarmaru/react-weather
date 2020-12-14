import React from "react";
import 'fontsource-roboto';
import { Grid, Typography } from "@material-ui/core";
import { Spring } from 'react-spring/renderprops';

import WeatherIcon from '../WeatherIcon/WeatherIcon';

interface CurrentWeatherProps {
    temperature: number,
    feelsLike: number,
    description: string,
    weatherIconId: number
}

const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {
    return (
        <Grid container spacing={2} style={{marginBottom: '40px', width: '98%'}}>
            <Grid item xs={6}>
                <div style={{textAlign: 'right'}}>
                    <WeatherIcon iconId={props.weatherIconId} size={140}/>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{textAlign: 'left'}}>
                    <Spring
                        from={{number: 0}}
                        to={{number: props.temperature}}>
                            {props => <Typography variant='h2'>{props.number.toFixed()}°</Typography> }
                    </Spring>
                    <Typography variant='h6'>Feels like {props.feelsLike}°</Typography>
                    <Typography variant='subtitle1'>{props.description}</Typography>
                </div>
            </Grid>
        </Grid>
    );
};

export default CurrentWeather;
