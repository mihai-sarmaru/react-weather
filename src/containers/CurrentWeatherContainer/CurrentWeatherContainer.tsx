import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import DetailWeather from '../../components/DetailWeather/DetailWeather';
import { AppActions } from '../../store/actions';
import { AppState } from '../../store/rootStore';
import { IWeather } from '../../store/Weather/models/Weather';
import { fetchWeather } from '../../store/Weather/WeatherActions';

interface Props {}

interface LinkStateProps {
    weather: IWeather;
}

interface LinkDispatchProps {
    fetchWeather: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        weather: state.weatherReducer.weather
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => {
    return {
        fetchWeather: bindActionCreators(fetchWeather, dispatch)
    }
};

class CurrentWeatherContainer extends Component<LinkProps> {

    componentDidMount() {
        this.props.fetchWeather();
    }

    onLoadWeather = () => {
        let weather = <h1>Loading...</h1>;

        if (this.props.weather.currentWeather) {
            weather = (
                <div>
                    <CurrentWeather
                        temperature={this.props.weather.currentWeather.temp}
                        feelsLike={this.props.weather.currentWeather.feelsLike}
                        description={this.props.weather.currentWeather.weather[0].description}
                        weatherIconId={this.props.weather.currentWeather.weather[0].id} />

                <DetailWeather currentWeather={this.props.weather.currentWeather} />
                </div>
            );
        }

        return weather;
    }
    
    render() {
        return(
            <div>
                <h1>Hello React Weather</h1>
                {this.onLoadWeather()}
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherContainer);