import React, { Component } from 'react';
import { connect } from 'react-redux';
import FetchingWeather from '../../components/FetchingWeather/FetchingWeather';
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

class HourlyWeatherContainer extends Component<LinkProps> {

    fetchHourlyWeather = () => {
        let weatherChart = <FetchingWeather key={'fetching'} />;
        if (this.props.hourlyWeather) {
            weatherChart = <WeatherChart hourlyWeather={this.props.hourlyWeather} />;
        }
        return weatherChart;
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