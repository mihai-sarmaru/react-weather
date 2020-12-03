import React from 'react';
import { Grid } from '@material-ui/core';
import DetailItem from './DetailItem/DetailItem';
import DetailItemType from './DetailItem/DetailItemTypes';

const DetailWeather = () => {
    return (
        <div style={{margin: 'auto', width: '80%'}}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.PRECIPITATION_CHANCE} value='20'/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.WIND} value='4'/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.UV_INDEX} value='2'/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.CLOUD_COVER} value='10'/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.PRESSURE} value='761'/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.HUMIDITY} value='20'/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.DEW_POINT} value='2'/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.VISIBILITY} value='15'/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.SUNRISE} value='07:28'/>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <DetailItem itemType={DetailItemType.SUNSET} value='16:29'/>
                </Grid>
            </Grid>
        </div>
    );
}

export default DetailWeather;