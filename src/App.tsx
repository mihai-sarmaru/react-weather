import React from "react";
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import CurrentWeatherContainer from "./containers/CurrentWeatherContainer/CurrentWeatherContainer";
import ForecastContainer from "./containers/ForecastContainer/ForecastContainer";

function App() {
    return (
        <React.Fragment>
            <h1>Hello React Weather</h1>
            <Switch>
                <Route path='/forecast' component={ForecastContainer} />
                <Route path='/' component={CurrentWeatherContainer} />
                <Redirect to='/' />
            </Switch>
        </React.Fragment>
    );
}

export default withRouter(App);
