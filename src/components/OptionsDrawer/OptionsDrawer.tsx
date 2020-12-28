import React from 'react';
import { Drawer, Grid } from '@material-ui/core';
import LanguageOptions from '../LanguageOptions/LanguageOptions';

interface OptionsDrawerProps {
    open: boolean;
    onClose: () => void;
}

const OptionsDrawer: React.FC<OptionsDrawerProps> = (props) => {
    return (
        <Drawer anchor='top' open={props.open} onClose={props.onClose}>

            <Grid container>
                <LanguageOptions />
            </Grid>

        </Drawer>
    );
}

export default OptionsDrawer;