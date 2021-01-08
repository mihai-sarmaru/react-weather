import React from 'react';
import { Box, Typography } from '@material-ui/core';
import * as Icons from "react-icons/fa"

const About = () => {
    return(
        <div>
            <Box borderRadius={16} className='box-default' style={{padding: '20px 0'}}>
                <Typography variant='body2' className='typography-secondary'>
                    Built with <Icons.FaHeart size={11} color='#d32f2f'/> by <strong>Mihai Sârmaru</strong>
                </Typography>
            </Box>
        </div>
    );
}

export default About;