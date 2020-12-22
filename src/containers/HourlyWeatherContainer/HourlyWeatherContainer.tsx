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
            hourlyDetail = this.props.hourlyWeather.map((hourly, index) => {
                if (this.state.moreInfo) {
                    return <HourlyList key={index} hourly={hourly} />
                } else {
                    return index < 3 ? <HourlyList key={index} hourly={hourly} /> : null;
                }
            });
            hourlyDetail = <div style={{marginTop: '50px'}}>{hourlyDetail}</div>
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
                {this.fetchHourlyWeather()}
                {this.fetchHourlyDetailWeather()}
                <Button variant='outlined' size='small' style={{margin: '20px 0'}}
                    onClick={this.onMoreButtonClick}>{this.state.moreInfo ? 'Less' : 'More'}</Button>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(HourlyWeatherContainer));