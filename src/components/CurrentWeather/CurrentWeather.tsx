import React from "react";
import 'fontsource-roboto';
import { Grid, Typography } from "@material-ui/core";
import * as Icons from "weather-icons-react";

interface CurrentWeatherProps {
    temperature: number,
    feelsLike: number,
    description: string
}

const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {
    return (
        <div>
            <Grid container spacing={2} justify={"center"}>
                <Grid item xs={6}>
                    <div style={{textAlign: 'right'}}>
                        <Icons.WiDaySunny size={140} color='#000'/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{textAlign: 'left'}}>
                        <Typography variant='h2'>{props.temperature}°</Typography>
                        <Typography variant='h6'>Feels like {props.feelsLike}°</Typography>
                        <Typography variant='subtitle1'>{props.description}</Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default CurrentWeather;
