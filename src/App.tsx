import React, { Suspense } from "react";
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Loading from "./components/Loading/Loading";
import QuickNavigation from "./components/QuickNavigation/QuickNavigation";
import CurrentWeatherContainer from "./containers/CurrentWeatherContainer/CurrentWeatherContainer";

// Lazy load compoenents
const ForecastContainer = React.lazy(() => {
    return import("./containers/ForecastContainer/ForecastContainer");
});

const HourlyWeatherContainer = React.lazy(() => {
    return import("./containers/HourlyWeatherContainer/HourlyWeatherContainer");
});

function App() {
    return (
        <React.Fragment>
            <QuickNavigation />
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path='/hourly' render={() => <HourlyWeatherContainer/>} />
                    <Route path='/forecast' render={() => <ForecastContainer/>} />
                    <Route path='/' component={CurrentWeatherContainer} />
                    <Redirect to='/' />
                </Switch>
            </Suspense>
        </React.Fragment>
    );
}

export default withRouter(App);
