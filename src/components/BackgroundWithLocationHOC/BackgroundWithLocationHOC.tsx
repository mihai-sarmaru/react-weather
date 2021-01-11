import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';
import { getRandomWeatherImage } from '../../utils/ImageUtil';

interface BackgroundWithLocationHOCProps {}

const BackgroundWithLocationHOC: React.FC<BackgroundWithLocationHOCProps> = (props) => {

    const currentWeather = useSelector((state: AppState) => state.weatherReducer.weather);
    const [weatherImage, setweatherImage] = useState('');
    const [weatherLocation, setWeatherLocation] = useState('');
    
    useEffect(() => {
        if (currentWeather.currentWeather !== undefined) {
            setweatherImage(getRandomWeatherImage(currentWeather.currentWeather.weather[0].id));
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
                    {props.children}
                    <div style={{marginTop: '15px'}}>
                        <Typography variant='subtitle2' style={{color: '#ffffff'}}>{weatherLocation}</Typography>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default BackgroundWithLocationHOC;