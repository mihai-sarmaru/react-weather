import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppState } from "../../store/rootStore";

const FetchingWeather = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    return <div style={{marginTop: '300px'}}>
        <CircularProgress />
        <Typography variant='subtitle1'>{localization.language.get('loading')}</Typography>
    </div>;
};

export default FetchingWeather;