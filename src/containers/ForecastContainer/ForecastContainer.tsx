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
        forecast: state.weatherReducer.weather.forecast,
    }
}

interface LocalState {
    expanded: boolean[];
}

class ForecastContainer extends Component<LinkProps> {

    state: LocalState = {
        expanded: []
    }

    componentDidMount() {
        // prevent inifite loop
        if (this.props.forecast && this.state.expanded.length === 0) {
            this.initLocalState(this.props.forecast.length);
        }
    }

    initLocalState = (forecastLength: number) => {
        let exArr: boolean[] = [];
        for (let i = 0; i < forecastLength; i++) {
            exArr.push(false);
        }
        this.setState( () => {
            return { expanded: exArr }
        })
    }

    onExpandClick = (index: number) => {
        this.setState((prevState: LocalState) => {
            return {
                expanded: prevState.expanded.map((item, itemIndex) => {
                    return itemIndex === index ? !item : item;
                })
            }
        })
    }

    fetchWeatherForecast = () => {
        let overviewItems = [<FetchingWeather key={'fetching'} />];
        if (this.props.forecast) {
            overviewItems = this.props.forecast.map( (item, index) => (
                <OverviewItem
                    key={item.dt}
                    forecast={item}
                    expanded={this.state.expanded[index]}
                    expandClick={() => this.onExpandClick(index)}/>
                )
            );
        }
        return overviewItems;
    }

    render() {
        return (
            <div>
                {this.fetchWeatherForecast()}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ForecastContainer);