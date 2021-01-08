import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';
import { getRandomWeatherImage } from '../../utils/ImageUtil';

interface BackgroundHOCProps {}

const BackgroundHOC: React.FC<BackgroundHOCProps> = (props) => {

    const currentWeather = useSelector((state: AppState) => state.weatherReducer.weather);
    console.log(currentWeather);

    let weatherImage = '';
    if (currentWeather.currentWeather !== undefined) {
        weatherImage = getRandomWeatherImage(currentWeather.currentWeather.weather[0].id);
    }

    return(
        <React.Fragment>
            <div className='fullscreen-image' style={{
                    backgroundImage: `url(${weatherImage})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    }}>
                {props.children}
            </div>
        </React.Fragment>
        
    );
}

export default BackgroundHOC;