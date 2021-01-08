import { Button, ButtonGroup, IconButton, Tooltip } from '@material-ui/core';
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
            <ButtonGroup variant='outlined' size='medium' style={{margin: '130px 0 0 0', background: 'white', opacity: '0.9'}}>
                <Button startIcon={<WiIcons.WiThermometer />}
                    component={Link} to={'/'}>{localization.language.get('nav-now')}</Button>
                <Button startIcon={<WiIcons.WiTime4 />}
                    component={Link} to={'/hourly'}>{localization.language.get('nav-hourly')}</Button>
                <Button startIcon={<WiIcons.WiWindDeg />}
                    component={Link} to={'/forecast'}>{localization.language.get('nav-later')}</Button>
            </ButtonGroup>
            <OptionsDrawer open={navState.drawer} onClose={onOptionsButtonClick} />

            <Tooltip title={localization.language.get('nav-settings')!} >
                <IconButton 
                    style={{backgroundColor: '#ffffff', opacity: '0.9',
                        position: 'absolute', top: '0', right: '0', margin: '5px'}}
                    onClick={onOptionsButtonClick}>
                    <MdIcons.MdSettings size={18}/>
                </IconButton>
            </Tooltip>
        </React.Fragment>
    );
}

export default QuickNavigation;