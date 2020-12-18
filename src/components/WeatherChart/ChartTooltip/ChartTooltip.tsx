import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import * as FiIcons from 'react-icons/fi';
import * as WiIcons from 'react-icons/wi';
import chartType from '../chartType';

interface ChartTooltipProps {
    chartType: chartType;
    active?: boolean;
    payload?: any;
}

const ChartTooltip: React.FC<ChartTooltipProps> = (props) => {

    let tooltipMeasurement = '';
    let tooltipMeasurementIcon = <WiIcons.WiAlien size={20} color='#000'/>;
    if (props.active) {
        switch (props.chartType) {
            case chartType.TEMPERATURE:
                tooltipMeasurement = props.payload[0].payload.temp + '°';
                tooltipMeasurementIcon = <WiIcons.WiThermometer size={20} color='#86c3d6'/>;
                break;
            case chartType.WIND:
                tooltipMeasurement = props.payload[0].payload.windSpeed + ' km/h';
                tooltipMeasurementIcon = <WiIcons.WiStrongWind size={20} color='#becbd1'/>;
                break;
            case chartType.PRECIPITATION:
                tooltipMeasurement = props.payload[0].payload.precipitation + '%';
                tooltipMeasurementIcon = <WiIcons.WiUmbrella size={20} color='#666'/>;
                break;
            default:
                tooltipMeasurement = props.payload[0].payload.temp + '°';
                tooltipMeasurementIcon = <WiIcons.WiThermometer size={20} color='#86c3d6'/>;
                break;
        }
    }

    let tooltip = null;
    if (props.active) {
        tooltip = <Paper elevation={1} style={{padding: '10px', background: 'rgba(255, 255, 255, 0.95)'}}>

                <Grid container spacing={3}>
                    <Grid item >
                        <FiIcons.FiClock size={20} color='#000'/>
                        <Typography><strong>{props.payload[0].payload.dt}:00</strong></Typography>
                    </Grid>
                    <Grid item>
                        {tooltipMeasurementIcon}
                        <Typography>{tooltipMeasurement}</Typography>
                    </Grid>
                </Grid>

            </Paper>;
    }

    return(
        <React.Fragment>
            {tooltip}
        </React.Fragment>
    );
}

export default ChartTooltip;