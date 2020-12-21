import React from 'react';
import * as Icon from 'react-icons/wi'

interface WeatherIconProps {
    iconId: number,
    day: boolean,
    size?: number
}

const WeatherIcon: React.FC<WeatherIconProps> = (props) => {

    // Default alien icon
    let weatherIcon = <Icon.WiAlien size={props.size} color='#7d8b8e' />

    // Thunderstorm
    if (props.iconId >= 200 && props.iconId < 300) {
        weatherIcon = props.day ?
            <Icon.WiThunderstorm size={props.size} color='#7d8b8e' /> :
            <Icon.WiNightThunderstorm size={props.size} color='#7d8b8e' />
    }

    // Drizzle
    if (props.iconId >= 300 && props.iconId < 400) {
        weatherIcon = props.day ?
            <Icon.WiRainMix size={props.size} color='#96a7af' /> :
            <Icon.WiNightRainMix size={props.size} color='#96a7af' />
    }

    // Rain
    if (props.iconId >= 500 && props.iconId < 600) {
        weatherIcon = props.day ?
            <Icon.WiRain size={props.size} color='#83c2d3' /> :
            <Icon.WiNightRain size={props.size} color='#83c2d3' />
    }

    // Snow
    if (props.iconId >= 600 && props.iconId < 700) {
        weatherIcon = props.day ?
            <Icon.WiSnowflakeCold size={props.size} color='#97becf' /> :
            <Icon.WiNightSnow size={props.size} color='#97becf' />
    }

    // Atmosphere
    if (props.iconId >= 700 && props.iconId < 800) {
        weatherIcon = props.day ?
            <Icon.WiFog size={props.size} color='#becbd1' /> :
            <Icon.WiNightFog size={props.size} color='#becbd1' />
    }

    // Clear
    if (props.iconId === 800) {
        weatherIcon = props.day ? 
            <Icon.WiDaySunny size={props.size} color='#edcf53' /> :
            <Icon.WiNightClear size={props.size} color='#becbd1' />
    }

    // Cloudy
    if (props.iconId > 800 && props.iconId < 900) {
        weatherIcon = props.day ?
            <Icon.WiCloudy size={props.size} color='#becbd1' /> :
            <Icon.WiNightCloudy size={props.size} color='#becbd1' />
    }


    return (
        <React.Fragment>
            {weatherIcon}
        </React.Fragment>
    );
}

export default WeatherIcon;