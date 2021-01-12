import React from 'react';
import { Box } from '@material-ui/core';
import * as Icons from 'react-icons/md';
import GooglePlaces from '../GooglePlaces/GooglePlaces';

const NoGeolocation = () => {
    return(
        <div>
            <Box borderRadius={16}
                style={{width: '75%', margin: '250px auto', padding: '20px', background: '#ffffff'}}>
                <Icons.MdLocationOff size= {64} style={{marginBottom: '20px'}} />
                <GooglePlaces />
            </Box>
        </div>
    );
}

export default NoGeolocation;