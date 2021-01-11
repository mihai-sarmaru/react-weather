import React from 'react';
import { Link } from '@material-ui/core'
import * as Icons from 'react-icons/md';
import { getLocationsFromStorage, addToCurrentLocation, Location } from '../../utils/LocationUtils';

const LastLocations = () => {

    const locations = getLocationsFromStorage();

    const onLocationClick = (location: Location) => {
        addToCurrentLocation(location);
        window.location.reload(); // <-- refresh window
    }

    return(
        <div style={locations === null ? {display: 'none'} : {textAlign: 'left', padding: '10px 20px'}}>
            {locations === null ? null : locations.map((loc, index) => {
                return <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                        <Icons.MdLocationOn className='typography-secondary' /> 
                        <Link href='#' onClick={() => onLocationClick(loc)}
                            style={{margin: '10px 0 10px 5px'}}
                            key={index} >{loc.name}</Link>
                    </div>
            })}
        </div>
    );
}

export default LastLocations;