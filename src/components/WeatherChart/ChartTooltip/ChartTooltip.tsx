import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import chartType from '../chartType';

interface ChartTooltipProps {
    chartType: chartType;
    active?: boolean;
    payload?: any;
}

const ChartTooltip: React.FC<ChartTooltipProps> = (props) => {

    let tooltipMeasurement = '';
    if (props.active) {
        switch (props.chartType) {
            case chartType.TEMPERATURE:
                tooltipMeasurement = 'Temperature: ' + props.payload[0].payload.temp + '°';
                break;
            case chartType.WIND:
                tooltipMeasurement = 'Wind: ' + props.payload[0].payload.windSpeed + ' km/h';
                break;
            case chartType.PRECIPITATION:
                tooltipMeasurement = 'Precipitation: ' + props.payload[0].payload.precipitation + '%';
                break;
            default:
                tooltipMeasurement = 'Temperature: ' + props.payload[0].payload.temp + '°';
                break;
        }
    }

    let tooltip = null;
    if (props.active) {
        tooltip = <Paper elevation={1} style={{padding: '5px'}}>
                <Typography><strong>{props.payload[0].payload.dt}:00</strong></Typography>
                <Typography>{tooltipMeasurement}</Typography>
            </Paper>;
    }

    return(
        <React.Fragment>
            {tooltip}
        </React.Fragment>
    );
}

export default ChartTooltip;