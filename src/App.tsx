import React, { Suspense, useEffect, useState } from "react";
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Loading from "./components/Loading/Loading";
import QuickNavigation from "./components/QuickNavigation/QuickNavigation";
import BackgroundHOC from "./components/BackgroundHOC/BackgroundHOC";
import CurrentWeatherContainer from "./containers/CurrentWeatherContainer/CurrentWeatherContainer";
import { useSelector } from "react-redux";
import { AppState } from "./store/rootStore";

// Lazy load components
const ForecastContainer = React.lazy(() => {
    return import("./containers/ForecastContainer/ForecastContainer");
});

const HourlyWeatherContainer = React.lazy(() => {
    return import("./containers/HourlyWeatherContainer/HourlyWeatherContainer");
});

function App() {

    const currentWeather = useSelector((state: AppState) => state.weatherReducer);
    const [showNavigation, setshowNavigation] = useState(false);
    
    useEffect(() => {
        if (currentWeather.loading !== true) {
            setshowNavigation(true);
        }
    },[currentWeather]);

    const showNavigationMenu = () => {
        let navMenu = null;
        if (showNavigation) {
            navMenu = <BackgroundHOC>
                        <QuickNavigation />
                    </BackgroundHOC>
        }
        return navMenu;
    }

    return (
        <React.Fragment>
            {showNavigationMenu()}
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
