import React from 'react';
import * as Icon from 'react-icons/wi'

interface WeatherIconProps {
    iconId: number,
    size?: number,
    color?: string
}

const WeatherIcon: React.FC<WeatherIconProps> = (props) => {

    // Default alien icon
    let weatherIcon = <Icon.WiAlien size={props.size} color={props.color} />

    // Thunderstorm
    if (props.iconId >= 200 && props.iconId < 300) {
        weatherIcon = <Icon.WiThunderstorm size={props.size} color={props.color} />
    }

    // Drizzle
    if (props.iconId >= 300 && props.iconId < 400) {
        weatherIcon = <Icon.WiRainMix size={props.size} color={props.color} />
    }

    // Rain
    if (props.iconId >= 500 && props.iconId < 600) {
        weatherIcon = <Icon.WiRain size={props.size} color={props.color} />
    }

    // Snow
    if (props.iconId >= 600 && props.iconId < 700) {
        weatherIcon = <Icon.WiSnowflakeCold size={props.size} color={props.color} />
    }

    // Atmosphere
    if (props.iconId >= 700 && props.iconId < 800) {
        weatherIcon = <Icon.WiFog size={props.size} color={props.color} />
    }

    // Clear
    if (props.iconId === 800) {
        weatherIcon = <Icon.WiDaySunny size={props.size} color={props.color} />
    }

    // Cloudy
    if (props.iconId > 800 && props.iconId < 900) {
        weatherIcon = <Icon.WiCloudy size={props.size} color={props.color} />
    }


    return (
        <React.Fragment>
            {weatherIcon}
        </React.Fragment>
    );
}

export default WeatherIcon;