import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const QuickNavigation = () => {
    return(
        <ButtonGroup variant='outlined' style={{marginBottom: '25px'}}>
            <Button component={Link} to={'/'}>Now</Button>
            <Button component={Link} to={'/hourly'}>Hourly</Button>
            <Button component={Link} to={'/forecast'}>Forecast</Button>
        </ButtonGroup>
    );
}

export default QuickNavigation;