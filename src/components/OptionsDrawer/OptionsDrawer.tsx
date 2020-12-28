import React from 'react';
import { Drawer } from '@material-ui/core';

interface OptionsDrawerProps {
    open: boolean;
    onClose: () => void;
}

const OptionsDrawer: React.FC<OptionsDrawerProps> = (props) => {
    return (
        <Drawer anchor='top' open={props.open} onClose={props.onClose}>
            <h1>Hello Drawer :)</h1>
        </Drawer>
    );
}

export default OptionsDrawer;