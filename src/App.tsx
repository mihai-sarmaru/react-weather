import React from "react";
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
    return (
        <div>
            <h1>Hello React Weather</h1>
            <CurrentWeather temperature={27} feelsLike={25} description='sunny' weatherIconId={800} />
        </div>
    );
}

export default App;
