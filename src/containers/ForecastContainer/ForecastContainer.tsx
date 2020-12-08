import { connect } from 'react-redux';
import React, {Component} from 'react';
import { AppState } from '../../store/rootStore';
import { IForecastWeather } from '../../store/Weather/models/Weather';
import OverviewItem from '../../components/Forecast/OverviewItem/OverviewItem';

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
        return (
            <div>
                <OverviewItem />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ForecastContainer);