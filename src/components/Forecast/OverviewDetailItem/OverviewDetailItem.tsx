import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import DetailItem from '../../DetailWeather/DetailItem/DetailItem';
import DetailItemType from '../../DetailWeather/DetailItem/DetailItemTypes';
import { IForecastWeather } from '../../../store/Weather/models/Weather';
import { UnixUTCToHourMinuteString } from '../../../utils/DateConverter';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/rootStore';
import { Languages } from '../../../localization/model/localizationModel';

interface OverviewDetailItemProps {
    forecast: IForecastWeather;
}

const OverviewDetailItem: React.FC<OverviewDetailItemProps> = (props) => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);
    
    return(
        <Grid container spacing={2} style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <Grid item xs={12} sm={8} md={6}>
                
                <div style={{textAlign: 'left', marginLeft: '15px', marginBottom: '5px'}}>
                    <Typography variant='subtitle1' className='typography-secondary'>
                        {localization.selected === Languages.ENGLISH ? props.forecast.weather[0].description : ''}
                    </Typography>

                    <Grid container spacing={1} style={{marginTop: '15px'}}>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' style={{background: 'transparent'}} >
                                <DetailItem itemType={DetailItemType.WIND} value={props.forecast.windSpeed}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' style={{background: 'transparent'}} >
                                <DetailItem itemType={DetailItemType.CLOUD_COVER} value={props.forecast.clouds}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' style={{background: 'transparent'}} >
                                <DetailItem itemType={DetailItemType.UV_INDEX} value={props.forecast.uvi}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' style={{background: 'transparent'}} >
                                <DetailItem itemType={DetailItemType.PRESSURE} value={props.forecast.pressure}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' style={{background: 'transparent'}} >
                                <DetailItem itemType={DetailItemType.SUNRISE} value={UnixUTCToHourMinuteString(props.forecast.sunrise)}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' style={{background: 'transparent'}} >
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