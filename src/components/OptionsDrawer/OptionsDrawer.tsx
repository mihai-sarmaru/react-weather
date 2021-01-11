import React from 'react';
import { Drawer, Grid, Box, Tooltip, IconButton } from '@material-ui/core';
import * as MdIcons from 'react-icons/md';
import LanguageOptions from '../LanguageOptions/LanguageOptions';
import About from '../About/About';
import GooglePlaces from '../GooglePlaces/GooglePlaces';
import LastLocations from '../LastLocations/LastLocations';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';
import { removeCurrentSavedLocation } from '../../utils/LocationUtils';

interface OptionsDrawerProps {
    open: boolean;
    onClose: () => void;
}

const OptionsDrawer: React.FC<OptionsDrawerProps> = (props) => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    const onCurrectLocationClick = () => {
        removeCurrentSavedLocation();
        window.location.reload(); // <-- refresh window
    }

    return (
        <Drawer anchor='left' open={props.open} onClose={props.onClose} >

            <Tooltip title={localization.language.get('drawer-back')!} >
                <IconButton 
                    style={{backgroundColor: '#ffffff',
                        position: 'absolute', top: '0', left: '0', margin: '15px'}}
                    onClick={props.onClose} >
                    <MdIcons.MdArrowBack size={18}/>
                </IconButton>
            </Tooltip>

            <Tooltip title={localization.language.get('drawer-location')!} >
                <IconButton 
                    style={{backgroundColor: '#ffffff',
                        position: 'absolute', top: '0', right: '0', margin: '15px'}}
                    onClick={onCurrectLocationClick} >
                    <MdIcons.MdMyLocation size={18}/>
                </IconButton>
            </Tooltip>

            <div style={{background: '#f3f3f3', height: '100%'}}>
                <Grid container style={{width: '300px', marginTop: '50px'}}>
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