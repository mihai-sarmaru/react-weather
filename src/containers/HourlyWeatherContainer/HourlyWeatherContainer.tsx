import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import FetchingWeather from '../../components/FetchingWeather/FetchingWeather';
import chartType from '../../components/WeatherChart/chartType';
import WeatherChart from '../../components/WeatherChart/WeatherChart';
import { AppState } from '../../store/rootStore';
import { IForecastWeather, IHourlyWeather } from '../../store/Weather/models/Weather';
import HourlyList from '../../components/HourlyList/HourlyList';
import { Button, Box } from '@material-ui/core';
import * as Icon from 'react-icons/md';
import { ILocalization } from '../../localization/model/localizationModel';
import { Spring } from 'react-spring/renderprops';

interface Props {}

interface LinkStateProps {
    hourlyWeather: IHourlyWeather[];
    forecastWeather: IForecastWeather[];
    localization: ILocalization;
}

interface LinkDispatchProps {}

type LinkProps = Props & LinkStateProps & LinkDispatchProps & RouteComponentProps;

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        hourlyWeather: state.weatherReducer.weather.hourlyWeather,
        forecastWeather: state.weatherReducer.weather.forecast,
        localization: state.localizationReducer.language
    }
}

interface LocalState {
    chartType: chartType;
    moreInfo: boolean;
}

class HourlyWeatherContainer extends Component<LinkProps> {

    state: LocalState = {
        chartType: chartType.TEMPERATURE,
        moreInfo: false
    }

    componentDidMount() {
        if (!this.props.hourlyWeather) {
            this.props.history.push('/');
        }
    }

    fetchWeatherChart = () => {
        let weatherChart = <FetchingWeather key={'fetching'} />;
        if (this.props.hourlyWeather) {
            weatherChart = <WeatherChart
                            hourlyWeather={this.props.hourlyWeather}
                            chartType={this.state.chartType}
                            chartTypeHandler={(type: chartType) => this.onChartButtonClick(type)} />;
        }
        return weatherChart;
    }

    fetchHourlyDetailWeather = () => {
        let hourlyDetail = null;
        if (this.props.hourlyWeather) {
            hourlyDetail = this.props.hourlyWeather.filter((el, index) => {
                return index !== 0;
            }).map((hourly, index) => {
                if (this.state.moreInfo) {
                    return index % 3 === 0 ? <HourlyList key={index} hourly={hourly} forecast={this.props.forecastWeather} /> : null;
                } else {
                    return index < 3 ? <HourlyList key={index} hourly={hourly} forecast={this.props.forecastWeather} /> : null;
                }
            });
        }
        return hourlyDetail;
    }

    onChartButtonClick = (type: chartType) => {
        this.setState((prevState: LocalState) => {
            return {
                chartType: type
            }
        });
    }

    onMoreButtonClick = () => {
        this.setState((prevState: LocalState) => {
            return {
                moreInfo: !prevState.moreInfo
            }
        });
        this.fetchHourlyDetailWeather();
    }

    render() {
        return (
            <div>
                {this.fetchWeatherChart()}

                <div style={{marginTop: '20px'}}>
                    <Spring from={{opacity: 0}} to={{opacity: 1}} delay={200}>
                        { sprops => 
                            <div style={sprops}>
                                <Box borderRadius={16} className='box-default' style={{padding: '10px 0', marginBottom: '20px'}}>
                                    {this.fetchHourlyDetailWeather()}

                                    <Button variant='outlined' size='small' style={{margin: '10px 0', background: 'white'}}
                                        onClick={this.onMoreButtonClick}>
                                            {this.state.moreInfo ? <Icon.MdUnfoldLess /> : <Icon.MdUnfoldMore />}
                                            {this.state.moreInfo ? this.props.localization.language.get('toggle-less') :
                                                                this.props.localization.language.get('toggle-more')}
                                    </Button>
                                </Box>
                            </div>
                        }
                    </Spring>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(HourlyWeatherContainer));