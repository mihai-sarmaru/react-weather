import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import * as WiIcons from 'react-icons/wi';

const QuickNavigation = () => {
    return(
        <ButtonGroup variant='outlined' style={{margin: '40px 0'}}>
            <Button startIcon={<WiIcons.WiThermometer />}
                component={Link} to={'/'}>Now</Button>
            <Button startIcon={<WiIcons.WiTime4 />}
                component={Link} to={'/hourly'}>Hourly</Button>
            <Button startIcon={<WiIcons.WiWindDeg />}
                component={Link} to={'/forecast'}>Later</Button>
        </ButtonGroup>
    );
}

export default QuickNavigation;