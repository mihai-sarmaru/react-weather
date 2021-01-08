import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppState } from "../../store/rootStore";
import { Sunny, Cloudy } from 'weather-styled-icon';

const FetchingWeather = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    const getLoadingIcon = () => {
        let loadingIcon = <Sunny />;
        switch (Math.floor(Math.random() * Math.floor(2))) {
            case 0:
                loadingIcon = <Sunny />;
                break;
            case 1:
                loadingIcon = <Cloudy />;
                break;
            default:
                loadingIcon = <Sunny />;
                break;
        }
        return loadingIcon;
    }

    return <div style={{marginTop: '250px'}}>
        {getLoadingIcon()}
        <Typography variant='subtitle1'>{localization.language.get('loading')}</Typography>
    </div>;
};

export default FetchingWeather;