import { connect } from 'react-redux';
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { AppState } from '../../store/rootStore';
import { IForecastWeather } from '../../store/Weather/models/Weather';
import OverviewItem from '../../components/Forecast/OverviewItem/OverviewItem';
import FetchingWeather from '../../components/FetchingWeather/FetchingWeather';
import { Spring } from 'react-spring/renderprops';

interface Props {}

interface LinkStateProps {
    forecast: IForecastWeather[];
}

interface LinkDispatchProps {}

type LinkProps = Props & LinkStateProps & LinkDispatchProps & RouteComponentProps;

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
        } else {
            this.props.history.push('/');
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
            overviewItems = this.props.forecast.filter((el, index) => {
                return index !== 0;
            }).map((item, index) => (
                <Spring key={item.dt} from={{opacity: 0}} to={{opacity: 1}} delay={index * 150}>
                    { sprops =>
                        <div style={sprops}>
                            <OverviewItem
                                forecast={item}
                                expanded={this.state.expanded[index]}
                                expandClick={() => this.onExpandClick(index)}/>
                        </div>
                    }
                </Spring>
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

export default withRouter(connect(mapStateToProps)(ForecastContainer));