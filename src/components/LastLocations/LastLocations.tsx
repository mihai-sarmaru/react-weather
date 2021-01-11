import { Icon } from '@material-ui/core';
import React from 'react';
import * as Icons from 'react-icons/md';
import { getLocationsFromStorage } from '../../utils/LocationUtils';

const LastLocations = () => {

    const locations = getLocationsFromStorage();

    return(
        <div style={{textAlign: 'left', padding: '10px 20px'}}>
            {locations === null ? null : locations.map((loc, index) => {
                return <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                        <Icons.MdLocationOn className='typography-secondary' /> 
                        <p style={{margin: '10px 0 10px 5px'}} key={index}>{loc.name}</p>
                    </div>
            })}
        </div>
    );
}

export default LastLocations;