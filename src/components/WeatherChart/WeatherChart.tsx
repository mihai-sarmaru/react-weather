import React from 'react';
import { IconButton } from '@material-ui/core';
import * as WiIcon from 'react-icons/wi'
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { IHourlyWeather } from '../../store/Weather/models/Weather';
import { UnixUTCHourString } from '../../utils/DateConverter';
import chartType from './chartType';

interface WeatherChartProps {
    hourlyWeather: IHourlyWeather[];
    chartType: (type: chartType) => void;
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

    return(
        <React.Fragment>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <LineChart width={400} height={200} data={parsedData}>
                    <XAxis dataKey='dt'/>
                    {/* <YAxis dataKey='temp' /> */}
                    <Line dataKey='temp' stroke="#000" strokeWidth={2}/>
                </LineChart>
            </div>
            <div>
                <IconButton color='default' onClick={() => props.chartType(chartType.TEMPERATURE)}>
                    <WiIcon.WiThermometer size={32}/>
                </IconButton>
                <IconButton color='default' onClick={() => props.chartType(chartType.WIND)}>
                    <WiIcon.WiStrongWind size={32}/>
                </IconButton>
                <IconButton color='default' onClick={() => props.chartType(chartType.PRECIPITATION)}>
                    <WiIcon.WiUmbrella size={32}/>
                </IconButton>
            </div>
        </React.Fragment>
    );
}

export default WeatherChart;