import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

const FetchingWeather = () => {
    return <div style={{margin: '50px 0'}}>
        <CircularProgress />
        <Typography variant='subtitle1'>Fetching Weather</Typography>
    </div>;
};

export default FetchingWeather;