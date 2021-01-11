import React from 'react';
import { getLocationsFromStorage } from '../../utils/LocationUtils';

const LastLocations = () => {

    const locations = getLocationsFromStorage();

    return(
        <div style={{textAlign: 'left', paddingLeft: '20px'}}>
            {locations === null ? null : locations.map((loc, index) => {
                return <p key={index}>{loc.name}</p>
            })}
        </div>
    );
}

export default LastLocations;