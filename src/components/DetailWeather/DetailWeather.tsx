import React from 'react';
import { Grid } from '@material-ui/core';
import DetailItem from './DetailItem/DetailItem';
import DetailItemType from './DetailItem/DetailItemTypes';
import { ICurrentWeather } from '../../store/Weather/models/Weather';

interface DetailWeatherProps {
    currentWeather: ICurrentWeather;
}

const DetailWeather: React.FC<DetailWeatherProps> = (props) => {
    return (
        <div style={{margin: 'auto', width: '80%'}}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.PRECIPITATION_CHANCE} value='???'/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.WIND} value={props.currentWeather.windSpeed}/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.UV_INDEX} value={props.currentWeather.uvi}/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.CLOUD_COVER} value={props.currentWeather.clouds}/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.PRESSURE} value={props.currentWeather.pressure}/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.HUMIDITY} value={props.currentWeather.humidity}/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.DEW_POINT} value={props.currentWeather.dewPoint}/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.VISIBILITY} value={props.currentWeather.visibility}/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.SUNRISE} value={props.currentWeather.sunrise}/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.SUNSET} value={props.currentWeather.sunset}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default DetailWeather;