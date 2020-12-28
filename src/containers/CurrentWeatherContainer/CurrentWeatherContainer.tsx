import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import DetailWeather from '../../components/DetailWeather/DetailWeather';
import FetchingWeather from '../../components/FetchingWeather/FetchingWeather';
import { ILocalization } from '../../localization/model/localizationModel';
import { AppActions } from '../../store/actions';
import { changeLanguage } from '../../store/Localization/LocalizationActions';
import { AppState } from '../../store/rootStore';
import { IWeather } from '../../store/Weather/models/Weather';
import { fetchWeather } from '../../store/Weather/WeatherActions';
import { UnixUTCDayIcon } from '../../utils/DateConverter';
import { regionRomania } from '../../localization/utils/coordinates';

interface Props {}

interface LinkStateProps {
    weather: IWeather;
    localization: ILocalization;
}

interface LinkDispatchProps {
    fetchWeather: (lat: number, long: number) => void;
    changeLanguage: (lang: string) => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        weather: state.weatherReducer.weather,
        localization: state.localizationReducer.language
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => {
    return {
        fetchWeather: bindActionCreators(fetchWeather, dispatch),
        changeLanguage: bindActionCreators(changeLanguage, dispatch)
    }
};

class CurrentWeatherContainer extends Component<LinkProps> {

    componentDidMount() {
        if (!this.props.weather.currentWeather) {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(pos => {
                    // Set starting language based on position 
                    const localLang = regionRomania(pos.coords.latitude, pos.coords.longitude) ? 'romanian' : 'english';
                    this.setLocalization(localLang);
                    this.props.fetchWeather(pos.coords.latitude, pos.coords.longitude);
                }, error => {
                    // TODO: remove this when publishing autocomplete
                    console.log(error.message);
                    this.setLocalization('romanian');
                    this.props.fetchWeather(+process.env.REACT_APP_DEFAULT_LAT!, +process.env.REACT_APP_DEFAULT_LONG!);
                });
            }
        }
    }

    setLocalization = (localLang: string) => {
        let language = localStorage.getItem('localization');
        if (language !== null) {
            this.props.changeLanguage(language);
        } else {
            localStorage.setItem('localization', localLang);
            this.props.changeLanguage(localLang);
        }
    }

    onLoadWeather = () => {
        let weather = <FetchingWeather />;

        if (this.props.weather.currentWeather) {
            weather = (
                <div>
                    <CurrentWeather
                        temperature={this.props.weather.currentWeather.temp}
                        feelsLike={this.props.weather.currentWeather.feelsLike}
                        description={this.props.weather.currentWeather.weather[0].description}
                        weatherIconId={this.props.weather.currentWeather.weather[0].id}
                        day={UnixUTCDayIcon(this.props.weather.currentWeather.dt,
                            this.props.weather.currentWeather.sunrise,
                            this.props.weather.currentWeather.sunset)} />

                <DetailWeather
                    currentWeather={this.props.weather.currentWeather}
                    precipitation={this.props.weather.hourlyWeather[0].precipitation} />
                </div>
            );
        }

        return weather;
    }
    
    render() {
        return(
            <div>
                {this.onLoadWeather()}
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherContainer);