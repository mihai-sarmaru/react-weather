import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import FetchingWeather from '../../components/FetchingWeather/FetchingWeather';
import chartType from '../../components/WeatherChart/chartType';
import WeatherChart from '../../components/WeatherChart/WeatherChart';
import { AppState } from '../../store/rootStore';
import { IHourlyWeather } from '../../store/Weather/models/Weather';
import HourlyList from '../../components/HourlyList/HourlyList';
import { Button } from '@material-ui/core';
import * as Icon from 'react-icons/md';

interface Props {}

interface LinkStateProps {
    hourlyWeather: IHourlyWeather[];
}

interface LinkDispatchProps {}

type LinkProps = Props & LinkStateProps & LinkDispatchProps & RouteComponentProps;

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        hourlyWeather: state.weatherReducer.weather.hourlyWeather
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

    fetchHourlyWeather = () => {
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
                    return index % 3 === 0 ? <HourlyList key={index} hourly={hourly} /> : null;
                } else {
                    return index < 3 ? <HourlyList key={index} hourly={hourly} /> : null;
                }
            });
        }
        return <div style={{marginTop: '50px'}}>{hourlyDetail}</div>;
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
                {this.fetchHourlyWeather()}
                {this.fetchHourlyDetailWeather()}
                <Button variant='outlined' size='small' style={{margin: '20px 0'}}
                    onClick={this.onMoreButtonClick}>
                        {this.state.moreInfo ? <Icon.MdUnfoldLess /> : <Icon.MdUnfoldMore />}
                        {this.state.moreInfo ? 'Less' : 'More'}
                        </Button>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(HourlyWeatherContainer));