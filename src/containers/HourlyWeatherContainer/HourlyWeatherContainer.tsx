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
}

class HourlyWeatherContainer extends Component<LinkProps> {

    state: LocalState = {
        chartType: chartType.TEMPERATURE
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
                return <HourlyList key={index} hourly={hourly} />
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

    render() {
        return (
            <div>
                {this.fetchHourlyWeather()}
                {this.fetchHourlyDetailWeather()}
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(HourlyWeatherContainer));