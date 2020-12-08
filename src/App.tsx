import React from "react";
import CurrentWeatherContainer from "./containers/CurrentWeatherContainer/CurrentWeatherContainer";
import ForecastContainer from "./containers/ForecastContainer/ForecastContainer";

function App() {
    return (
        <React.Fragment>
            <CurrentWeatherContainer />
            <ForecastContainer />
        </React.Fragment>
    );
}

export default App;
