import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';
import { getRandomWeatherImage, getUnsplashOption, getUnsplashImageLink } from '../../utils/ImageUtil';

interface BackgroundWithLocationHOCProps {}

const BackgroundWithLocationHOC: React.FC<BackgroundWithLocationHOCProps> = (props) => {

    const currentWeather = useSelector((state: AppState) => state.weatherReducer.weather);
    const [weatherImage, setweatherImage] = useState('');
    const [weatherLocation, setWeatherLocation] = useState('');
    
    useEffect(() => {
        if (currentWeather.currentWeather !== undefined) {
            const imageLink = getUnsplashOption() ?
                              getUnsplashImageLink() :
                              getRandomWeatherImage(currentWeather.currentWeather.weather[0].id);
            setweatherImage(imageLink);
            setWeatherLocation(currentWeather.coordinates.locationName);
        }
    },[currentWeather.currentWeather, currentWeather.coordinates]);

    return(
        <React.Fragment>
            <div className='fullscreen-image' style={{
                    backgroundImage: `url(${weatherImage})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    }}>
                <div>
                    <div>{props.children}</div>
                    <div style={weatherLocation === '' ? {display: 'none'} :
                                {marginTop: '12px',
                                padding: '5px 20px',
                                display: 'inline-block',
                                background: 'rgba(0, 0, 0, 0.2)',
                                backdropFilter: 'blur(2px)',
                                borderRadius: '12px'}}>
                        <Typography variant='subtitle2'
                            style={{color: '#ffffff', fontSize: '12px'}}>
                                {weatherLocation}
                            </Typography>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default BackgroundWithLocationHOC;