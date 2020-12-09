import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { IHourlyWeather } from '../../store/Weather/models/Weather';
import { UnixUTCHourString } from '../../utils/DateConverter';

interface WeatherChartProps {
    hourlyWeather: IHourlyWeather[];
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
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <LineChart width={400} height={200} data={parsedData}>
                <XAxis dataKey='dt'/>
                {/* <YAxis dataKey='temp' /> */}
                <Line dataKey='temp' stroke="#000" strokeWidth={2}/>
            </LineChart>
        </div>
    );
}

export default WeatherChart;