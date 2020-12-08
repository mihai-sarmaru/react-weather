import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import DetailItem from '../../DetailWeather/DetailItem/DetailItem';
import DetailItemType from '../../DetailWeather/DetailItem/DetailItemTypes';
import { IForecastWeather } from '../../../store/Weather/models/Weather';
import { UnixUTCToHourMinuteString } from '../../../utils/DateConverter';

interface OverviewDetailItemProps {
    forecast: IForecastWeather;
}

const OverviewDetailItem: React.FC<OverviewDetailItemProps> = (props) => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={2}/>
            <Grid item xs={10}>
                
                <div style={{textAlign: 'left', marginLeft: '12px'}}>
                    <Typography variant='subtitle1'>{props.forecast.weather[0].description}</Typography>

                    <Grid container spacing={2} style={{marginTop: '15px'}}>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.WIND} value={props.forecast.windSpeed}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.CLOUD_COVER} value={props.forecast.clouds}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.UV_INDEX} value={props.forecast.uvi}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.PRESSURE} value={props.forecast.pressure}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.SUNRISE} value={UnixUTCToHourMinuteString(props.forecast.sunrise)}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.SUNSET} value={UnixUTCToHourMinuteString(props.forecast.sunset)}/>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </Grid>
        </Grid>
    );
}

export default OverviewDetailItem;