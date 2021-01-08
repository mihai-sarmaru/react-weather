import React from "react";
import 'fontsource-roboto';
import { Grid, Typography, Box } from "@material-ui/core";
import { Spring } from 'react-spring/renderprops';
import { useSelector } from "react-redux";

import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { AppState } from "../../store/rootStore";
import { Languages } from "../../localization/model/localizationModel";

interface CurrentWeatherProps {
    temperature: number,
    feelsLike: number,
    description: string,
    weatherIconId: number,
    day: boolean
}

const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    return (
        <Box borderRadius={16} className='box-default'>
            <Grid container spacing={2} style={{marginTop: '20px', marginBottom: '30px'}}>
                <Grid item xs={6}>
                    <div style={{textAlign: 'right'}}>
                        <WeatherIcon iconId={props.weatherIconId} day={props.day}
                        size={localization.selected === Languages.ENGLISH ? 140 : 110}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{textAlign: 'left'}}>
                        <Spring
                            from={{number: 0}}
                            to={{number: props.temperature}}>
                                {props => <Typography variant='h2' className='typography-primary'>{props.number.toFixed()}°</Typography> }
                        </Spring>
                        <Typography variant='h6' className='typography-primary'>{localization.language.get('current-feels')!} {props.feelsLike}°</Typography>
                        <Typography variant='subtitle1' className='typography-secondary'>
                            {localization.selected === Languages.ENGLISH ? props.description : ''}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CurrentWeather;
