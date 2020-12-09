import React from 'react';
import { IconButton } from '@material-ui/core';
import * as WiIcon from 'react-icons/wi'
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { IHourlyWeather } from '../../store/Weather/models/Weather';
import { UnixUTCHourString } from '../../utils/DateConverter';
import chartType from './chartType';

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
        // if (index % 2 === 0)
            parsedData.push(newElem);
    });

    let chartDataKey = 'temp';
    switch (props.chartType) {
        case chartType.TEMPERATURE:
            chartDataKey = 'temp';
            break;
        case chartType.WIND:
            chartDataKey = 'windSpeed';
            break;
        case chartType.PRECIPITATION:
            chartDataKey = 'precipitation';
            break;
        default:
            chartDataKey = 'temp';
            break;
    }

    return(
        <React.Fragment>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <LineChart width={400} height={200} data={parsedData}>
                    <XAxis dataKey='dt'/>
                    {/* <YAxis dataKey={chartDataKey} /> */}
                    <Line dataKey={chartDataKey} stroke="#000" strokeWidth={2}/>
                </LineChart>
            </div>
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
        </React.Fragment>
    );
}

export default WeatherChart;