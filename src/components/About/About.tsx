import React from 'react';
import { Box, IconButton, Tooltip, Typography } from '@material-ui/core';
import * as Icons from "react-icons/fa";
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootStore';

const About = () => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    return(
        <div>
            <Box borderRadius={16} className='box-default' style={{padding: '20px 0 10px 0'}}>
                <Typography variant='body2' className='typography-secondary'>
                    {localization.language.get('about-built')} 
                    <Icons.FaHeart size={11} color='#d32f2f'/> 
                    {localization.language.get('about-by')} 
                    <strong>Mihai Sârmaru</strong>
                </Typography>
                <div>
                    <Tooltip title='Github' >
                        <IconButton href='https://github.com/Predator7'>
                            <Icons.FaGithub size={28} color='#211F1F' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='LinkedIn' >
                        <IconButton href='https://linkedin.com/in/mihai-sarmaru'>
                            <Icons.FaLinkedin size={28} color='#0e76a8' />
                        </IconButton>
                    </Tooltip>
                </div>
            </Box>
        </div>
    );
}

export default About;