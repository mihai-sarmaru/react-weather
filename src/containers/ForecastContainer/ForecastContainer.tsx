import { connect } from 'react-redux';
import React, {Component} from 'react';
import { AppState } from '../../store/rootStore';
import { IForecastWeather } from '../../store/Weather/models/Weather';
import OverviewItem from '../../components/Forecast/OverviewItem/OverviewItem';
import FetchingWeather from '../../components/FetchingWeather/FetchingWeather';

interface Props {}

interface LinkStateProps {
    forecast: IForecastWeather[];
}

interface LinkDispatchProps {}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        forecast: state.weatherReducer.weather.forecast
    }
}


class ForecastContainer extends Component<LinkProps> {
    render() {

        let overviewItems = [<FetchingWeather />];
        if (this.props.forecast) {
            overviewItems = this.props.forecast.map(item => (
                <OverviewItem key={item.dt} forecast={item}/>
                )
            );
        }

        return (
            <div>
                {overviewItems}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ForecastContainer);