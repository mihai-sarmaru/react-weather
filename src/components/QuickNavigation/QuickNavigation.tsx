import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import * as WiIcons from 'react-icons/wi';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';

const QuickNavigation = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);
    
    return(
        <ButtonGroup variant='outlined' style={{margin: '40px 0'}}>
            <Button startIcon={<WiIcons.WiThermometer />}
                component={Link} to={'/'}>{localization.language.get('nav-now')}</Button>
            <Button startIcon={<WiIcons.WiTime4 />}
                component={Link} to={'/hourly'}>{localization.language.get('nav-hourly')}</Button>
            <Button startIcon={<WiIcons.WiWindDeg />}
                component={Link} to={'/forecast'}>{localization.language.get('nav-later')}</Button>
        </ButtonGroup>
    );
}

export default QuickNavigation;