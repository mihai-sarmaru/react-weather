import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import DetailItem from '../../DetailWeather/DetailItem/DetailItem';
import DetailItemType from '../../DetailWeather/DetailItem/DetailItemTypes';

const OverviewDetailItem = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={2}/>
            <Grid item xs={10}>
                
                <div style={{textAlign: 'left', marginLeft: '12px'}}>
                    <Typography variant='subtitle1'>Weather Description</Typography>

                    <Grid container spacing={2} style={{marginTop: '15px'}}>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.WIND} value={15}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.CLOUD_COVER} value={75}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.UV_INDEX} value={2}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.PRESSURE} value={1023}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.SUNRISE} value={'06:52'}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <Paper variant='outlined' >
                                <DetailItem itemType={DetailItemType.SUNSET} value={'17:35'}/>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </Grid>
        </Grid>
    );
}

export default OverviewDetailItem;