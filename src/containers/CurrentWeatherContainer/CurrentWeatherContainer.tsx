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
    currentWeather: IWeather;
}

interface LinkDispatchProps {
    fetchWeather: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        currentWeather: state.weatherReducer.weather
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
    
    render() {
        return(
            <div>
                <h1>Hello React Weather</h1>
                <CurrentWeather temperature={27} feelsLike={25} description='sunny' weatherIconId={800} />

                <DetailWeather />
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherContainer);