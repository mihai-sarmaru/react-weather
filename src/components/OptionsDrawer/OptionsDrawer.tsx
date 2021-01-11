import React from 'react';
import { Drawer, Grid, Box } from '@material-ui/core';
import LanguageOptions from '../LanguageOptions/LanguageOptions';
import About from '../About/About';
import GooglePlaces from '../GooglePlaces/GooglePlaces';
import LastLocations from '../LastLocations/LastLocations';

interface OptionsDrawerProps {
    open: boolean;
    onClose: () => void;
}

const OptionsDrawer: React.FC<OptionsDrawerProps> = (props) => {

    return (
        <Drawer anchor='left' open={props.open} onClose={props.onClose} >
            <div style={{background: '#f3f3f3', height: '100%'}}>
                <Grid container style={{width: '300px'}}>
                    <Box borderRadius={16} className='box-default' style={{margin: '20px auto'}}>
                        <GooglePlaces />
                    </Box>
                    <Box borderRadius={16} className='box-default' style={{margin: '0 auto 20px auto'}}>
                        <LastLocations />
                    </Box>
                    <Box borderRadius={16} className='box-default' style={{margin: '0 auto 20px auto'}}>
                        <LanguageOptions />
                    </Box>
                    <Box borderRadius={16} className='box-default' style={{margin: '0 auto 20px auto'}}>
                        <About />
                    </Box>
                </Grid>
            </div>
        </Drawer>
    );
}

export default OptionsDrawer;