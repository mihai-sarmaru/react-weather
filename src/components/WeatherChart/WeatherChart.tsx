import React from 'react';
import { Grid, IconButton, Tooltip, Box } from '@material-ui/core';
import * as WiIcon from 'react-icons/wi'
import * as Chart from 'recharts';
import { IHourlyWeather } from '../../store/Weather/models/Weather';
import { UnixUTCHourString } from '../../utils/DateConverter';
import chartType from './chartType';
import ChartTooltip from './ChartTooltip/ChartTooltip';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';
import { Spring } from 'react-spring/renderprops';

interface WeatherChartProps {
    hourlyWeather: IHourlyWeather[];
    chartType: chartType;
    chartTypeHandler: (type: chartType) => void;
}

const WeatherChart: React.FC<WeatherChartProps> = (props) => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

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
    let chartDataUnit = String.fromCharCode(176) + 'C';
    switch (props.chartType) {
        case chartType.TEMPERATURE:
            chartDataKey = 'temp';
            chartDataUnit = String.fromCharCode(176) + 'C';
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
            chartDataUnit = String.fromCharCode(176) + 'C';
            break;
    }

    return(
        <React.Fragment>
            <Spring from={{opacity: 0}} to={{opacity: 1}}>
                { sprops => 
                    <div style={sprops}>
                        <Box borderRadius={16} className='box-default' style={{marginTop: '20px'}}>
                            <div style={{paddingTop: '10px'}}>
                                <Tooltip title={localization.language.get('chart-tooltip-temperature')!} >
                                    <IconButton
                                        color={props.chartType === chartType.TEMPERATURE ? 'primary' : 'default'}
                                        onClick={() => props.chartTypeHandler(chartType.TEMPERATURE)}>
                                        <WiIcon.WiThermometer size={32}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title={localization.language.get('chart-tooltip-wind')!} >
                                    <IconButton
                                        color={props.chartType === chartType.WIND ? 'primary' : 'default'}
                                        onClick={() => props.chartTypeHandler(chartType.WIND)}>
                                        <WiIcon.WiStrongWind size={32}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title={localization.language.get('chart-tooltip-precipitation')!} >
                                    <IconButton
                                        color={props.chartType === chartType.PRECIPITATION ? 'primary' : 'default'}
                                        onClick={() => props.chartTypeHandler(chartType.PRECIPITATION)}>
                                        <WiIcon.WiUmbrella size={32}/>
                                    </IconButton>
                                </Tooltip>
                            </div>

                            <Grid container style={{justifyContent:'center'}}>
                                <Grid md={2} />
                                <Grid xs={12} md={8} style={{display: 'flex', justifyContent:'center'}}>
                                    <Chart.ResponsiveContainer width='95%' height={250}>
                                        <Chart.LineChart margin={{top: 35, left: 10, right: 10, bottom: 20}} data={parsedData}>
                                            <Chart.XAxis dataKey='dt' tickLine={false} tick={<div/>}>
                                                <Chart.Label position='insideBottomLeft' offset={0}
                                                    value={localization.language.get('chart-axis-now')!}/>
                                                <Chart.Label position='insideBottom' offset={0}
                                                    value={localization.language.get('chart-axis-24')!}/>
                                                <Chart.Label position='insideBottomRight' offset={0}
                                                    value={localization.language.get('chart-axis-48')!}/>
                                            </Chart.XAxis>
                                            <Chart.YAxis dataKey={chartDataKey} width={30} tickLine={false} axisLine={false}>
                                                <Chart.Label position='top' offset={20} value={chartDataUnit}/>
                                            </Chart.YAxis>
                                            <Chart.CartesianGrid stroke="#eee" strokeDasharray='3 5' horizontal={false} />
                                            <Chart.Tooltip content={<ChartTooltip chartType={props.chartType} />} />
                                            <Chart.Line dataKey={chartDataKey} strokeWidth={2}/>
                                        </Chart.LineChart>
                                    </Chart.ResponsiveContainer>
                                </Grid>
                                <Grid md={2} />
                            </Grid>
                        </Box>
                    </div>
                }
            </Spring>
        </React.Fragment>
    );
}

export default WeatherChart;