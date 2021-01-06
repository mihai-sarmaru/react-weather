import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import DetailItem from './DetailItem/DetailItem';
import DetailItemType from './DetailItem/DetailItemTypes';
import { ICurrentWeather } from '../../store/Weather/models/Weather';
import { UnixUTCToHourMinuteString } from '../../utils/DateConverter';
import { Spring } from 'react-spring/renderprops';

interface DetailWeatherProps {
    currentWeather: ICurrentWeather;
    precipitation: number;
}

const DetailWeather: React.FC<DetailWeatherProps> = (props) => {
    return (
        <Spring from={{opacity: 0}} to={{opacity: 1}}>
                { sprops => 
                    <div style={sprops}>
                        <Paper elevation={3} style={{margin: 'auto', width: '90%'}}>
                            <div style={{margin: 'auto', width: '80%'}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={4} lg={3}>
                                        <DetailItem itemType={DetailItemType.PRECIPITATION_CHANCE} value={props.precipitation}/>
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
                                        <DetailItem itemType={DetailItemType.SUNRISE} value={UnixUTCToHourMinuteString(props.currentWeather.sunrise)}/>
                                    </Grid>
                                    <Grid item xs={6} md={4} lg={3}>
                                        <DetailItem itemType={DetailItemType.SUNSET} value={UnixUTCToHourMinuteString(props.currentWeather.sunset)}/>
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                    </div>
                }
        </Spring>
    );
}

export default DetailWeather;