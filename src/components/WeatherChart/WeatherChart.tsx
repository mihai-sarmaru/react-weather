import React from 'react';
import { IconButton } from '@material-ui/core';
import * as WiIcon from 'react-icons/wi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label, ResponsiveContainer, Tooltip } from 'recharts';
import { IHourlyWeather } from '../../store/Weather/models/Weather';
import { UnixUTCHourString } from '../../utils/DateConverter';
import chartType from './chartType';
import ChartTooltip from './ChartTooltip/ChartTooltip';

interface WeatherChartProps {
    hourlyWeather: IHourlyWeather[];
    chartType: chartType;
    chartTypeHandler: (type: chartType) => void;
}

const WeatherChart: React.FC<WeatherChartProps> = (props) => {

    // Convert Date
    const parsedData: IHourlyWeather[] = [];
    props.hourlyWeather.forEach((element, index) => {
        const newElem = {
            ...element,
            dt: UnixUTCHourString(element.dt)
        }
        // Chart complexity - element devided by 3
        if (index % 3 === 0)
            parsedData.push(newElem);
    });

    let chartDataKey = 'temp';
    let chartDataUnit = '°C';
    switch (props.chartType) {
        case chartType.TEMPERATURE:
            chartDataKey = 'temp';
            chartDataUnit = '°C';
            break;
        case chartType.WIND:
            chartDataKey = 'windSpeed';
            chartDataUnit = 'km/h';
            break;
        case chartType.PRECIPITATION:
            chartDataKey = 'precipitation';
            chartDataUnit = '(%)';
            break;
        default:
            chartDataUnit = '°C';
            break;
    }

    return(
        <React.Fragment>
            <div>
                <IconButton
                    color={props.chartType === chartType.TEMPERATURE ? 'primary' : 'default'}
                    onClick={() => props.chartTypeHandler(chartType.TEMPERATURE)}>
                    <WiIcon.WiThermometer size={32}/>
                </IconButton>
                <IconButton
                    color={props.chartType === chartType.WIND ? 'primary' : 'default'}
                    onClick={() => props.chartTypeHandler(chartType.WIND)}>
                    <WiIcon.WiStrongWind size={32}/>
                </IconButton>
                <IconButton
                    color={props.chartType === chartType.PRECIPITATION ? 'primary' : 'default'}
                    onClick={() => props.chartTypeHandler(chartType.PRECIPITATION)}>
                    <WiIcon.WiUmbrella size={32}/>
                </IconButton>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <ResponsiveContainer width='90%' height={250}>
                    <LineChart margin={{top: 35, left: 10, right: 10}} data={parsedData}>
                        <XAxis dataKey='dt' tickLine={false} tick={<div/>}>
                            <Label position='insideBottomLeft' offset={0} value='Now'/>
                            <Label position='insideBottom' offset={0} value='24h'/>
                            <Label position='insideBottomRight' offset={0} value='48h'/>
                        </XAxis>
                        <YAxis dataKey={chartDataKey} width={30} tickLine={false} axisLine={false}>
                            <Label position='top' offset={20} value={chartDataUnit}/>
                        </YAxis>
                        <CartesianGrid stroke="#eee" strokeDasharray='3 5' horizontal={false} />
                        <Tooltip content={<ChartTooltip chartType={props.chartType} />} />
                        <Line dataKey={chartDataKey} strokeWidth={2}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </React.Fragment>
    );
}

export default WeatherChart;