import React from 'react';
import { Grid, IconButton, Typography, Paper } from '@material-ui/core';
import { UnmountClosed } from 'react-collapse';
import * as WiIcon from 'react-icons/wi'
import * as Icon from 'react-icons/md'
import WeatherIcon from '../../WeatherIcon/WeatherIcon';
import OverviewDetailItem from '../OverviewDetailItem/OverviewDetailItem';
import { IForecastWeather } from '../../../store/Weather/models/Weather';
import { UnixUTCToDayString } from '../../../utils/DateConverter';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/rootStore';

interface OverviewItemProps {
    forecast: IForecastWeather;
    expanded: boolean;
    expandClick: () => void;
}

const OverviewItem: React.FC<OverviewItemProps> = (props) => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    return (
        <Paper elevation={3} className='paper-default' style={{margin: '0 auto 20px auto'}}>
            <Grid container spacing={2} style={{margin: 'auto', width: '95%'}}>
                <Grid item xs={2} md={3}>
                    <div style={{textAlign: 'right', marginLeft: '-10px'}}>
                        <WeatherIcon iconId={props.forecast.weather[0].id} day={true} size={58}/>
                    </div>
                </Grid>
                <Grid item xs={8} md={6}>
                    <div style={{textAlign: 'left'}} onClick={props.expandClick}>
                        <Typography variant='h6' className='typography-primary'>
                            <strong>{UnixUTCToDayString(props.forecast.dt, localization)}</strong>
                        </Typography>
                        <div style={{display: 'flex'}}>
                            <WiIcon.WiUmbrella size={20} color='#7d8b8e' />
                            <Typography variant='subtitle2' className='typography-secondary' style={{marginRight: '20px'}}>{props.forecast.precipitation} %</Typography>
                            <WiIcon.WiThermometer size={20} color='#86c3d6' />
                            <Typography variant='subtitle2' className='typography-secondary'>{props.forecast.maxTemp}° | {props.forecast.minTemp}°</Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2} md={3}>
                    <div style={{textAlign: 'left'}}>
                        <IconButton onClick={props.expandClick}>
                            {props.expanded ? <Icon.MdExpandLess size={32}/> : <Icon.MdExpandMore size={32}/>}
                        </IconButton>
                    </div>
                </Grid>
            </Grid>

            <UnmountClosed isOpened={props.expanded}>
                <OverviewDetailItem forecast={props.forecast}/> 
            </UnmountClosed>
        </Paper>
    );
}

export default OverviewItem;