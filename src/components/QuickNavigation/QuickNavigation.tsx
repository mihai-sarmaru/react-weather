import { Button, ButtonGroup } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as WiIcons from 'react-icons/wi';
import * as MdIcons from 'react-icons/md';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';
import OptionsDrawer from '../OptionsDrawer/OptionsDrawer';

interface QuickNavigationLocalState {
    drawer: boolean;
}

const QuickNavigation = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    const [navState, setNavState] = useState<QuickNavigationLocalState>({drawer: false});

    const onOptionsButtonClick = () => {
        setNavState({drawer: !navState.drawer});
    }
    
    return(
        <React.Fragment>
            <ButtonGroup variant='outlined' style={{margin: '40px 0'}}>
                <Button startIcon={<WiIcons.WiThermometer />}
                    component={Link} to={'/'}>{localization.language.get('nav-now')}</Button>
                <Button startIcon={<WiIcons.WiTime4 />}
                    component={Link} to={'/hourly'}>{localization.language.get('nav-hourly')}</Button>
                <Button startIcon={<WiIcons.WiWindDeg />}
                    component={Link} to={'/forecast'}>{localization.language.get('nav-later')}</Button>
                <Button onClick={onOptionsButtonClick}><MdIcons.MdSettings /></Button>
            </ButtonGroup>
            <OptionsDrawer open={navState.drawer} onClose={onOptionsButtonClick} />
        </React.Fragment>
        
    );
}

export default QuickNavigation;