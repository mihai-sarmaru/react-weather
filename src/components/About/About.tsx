import React from 'react';
import { Box, Typography } from '@material-ui/core';
import * as Icons from "react-icons/fa"
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';

const About = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    return(
        <div>
            <Box borderRadius={16} className='box-default' style={{padding: '20px 0'}}>
                <Typography variant='body2' className='typography-secondary'>
                    {localization.language.get('about-built')} 
                    <Icons.FaHeart size={11} color='#d32f2f'/> 
                    {localization.language.get('about-by')} 
                    <strong>Mihai Sârmaru</strong>
                </Typography>
            </Box>
        </div>
    );
}

export default About;