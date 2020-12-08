import React from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import * as WiIcon from 'react-icons/wi'
import * as Icon from 'react-icons/md'
import WeatherIcon from '../../WeatherIcon/WeatherIcon';
import OverviewDetailItem from '../OverviewDetailItem/OverviewDetailItem';
import { IForecastWeather } from '../../../store/Weather/models/Weather';
import { UnixUTCToDayString } from '../../../utils/DateConverter';

interface OverviewItemProps {
    forecast: IForecastWeather;
    expanded: boolean;
    expandClick: () => void;
}

const OverviewItem: React.FC<OverviewItemProps> = (props) => {
    return (
        <Grid container spacing={4} style={{margin: 'auto', width: '80%'}}>
            <Grid item xs={2}>
                <div style={{textAlign: 'right'}}>
                    <WeatherIcon iconId={props.forecast.weather[0].id} size={58}/>
                </div>
            </Grid>
            <Grid item xs={8}>
                <div style={{textAlign: 'left'}}>
                    <Typography variant='h6'><strong>{UnixUTCToDayString(props.forecast.dt)}</strong></Typography>
                    <div style={{display: 'flex'}}>
                        <WiIcon.WiUmbrella size={20} />
                        <Typography variant='subtitle2' style={{marginRight: '20px'}}>{props.forecast.precipitation} %</Typography>
                        <WiIcon.WiThermometer size={20} />
                        <Typography variant='subtitle2'>{props.forecast.maxTemp}° | {props.forecast.minTemp}°</Typography>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <div style={{textAlign: 'right'}}>
                    <IconButton onClick={props.expandClick}>
                        {props.expanded ? <Icon.MdExpandLess size={32}/> : <Icon.MdExpandMore size={32}/>}
                    </IconButton>
                </div>
            </Grid>

            {props.expanded ? <OverviewDetailItem forecast={props.forecast}/> : null}

        </Grid>
    );
}

export default OverviewItem;