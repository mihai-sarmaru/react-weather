import React, { Component } from 'react';
import { connect } from 'react-redux';
import FetchingWeather from '../../components/FetchingWeather/FetchingWeather';
import chartType from '../../components/WeatherChart/chartType';
import WeatherChart from '../../components/WeatherChart/WeatherChart';
import { AppState } from '../../store/rootStore';
import { IHourlyWeather } from '../../store/Weather/models/Weather';

interface Props {}

interface LinkStateProps {
    hourlyWeather: IHourlyWeather[];
}

interface LinkDispatchProps {}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

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

    fetchHourlyWeather = () => {
        let weatherChart = <FetchingWeather key={'fetching'} />;
        if (this.props.hourlyWeather) {
            weatherChart = <WeatherChart
                            hourlyWeather={this.props.hourlyWeather}
                            chartType={(type: chartType) => this.onChartButtonClick(type)} />;
        }
        return weatherChart;
    }

    onChartButtonClick = (type: chartType) => {
        console.log(type);
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
            </div>
        );
    }
}

export default connect(mapStateToProps)(HourlyWeatherContainer);