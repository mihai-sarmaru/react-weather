import React from 'react';
import * as Icon from 'react-icons/wi';
import { UnixUTCHourString } from '../../utils/DateConverter';

interface ClockIconProps {
    dt: number | string;
    size?: number;
}

const ClockIcon: React.FC<ClockIconProps> = (props) => {

    const hour = typeof props.dt === 'number' ? UnixUTCHourString(+props.dt).toString() : props.dt;
    let hourIcon = <Icon.WiTime12 size={props.size} />
    
    if (hour === '0' || hour === '12') {
        hourIcon = <Icon.WiTime12 size={props.size} />
    }
    if (hour === '1' || hour === '13') {
        hourIcon = <Icon.WiTime1 size={props.size} />
    }
    if (hour === '2' || hour === '14') {
        hourIcon = <Icon.WiTime2 size={props.size} />
    }
    if (hour === '3' || hour === '15') {
        hourIcon = <Icon.WiTime3 size={props.size} />
    }
    if (hour === '4' || hour === '16') {
        hourIcon = <Icon.WiTime4 size={props.size} />
    }
    if (hour === '5' || hour === '17') {
        hourIcon = <Icon.WiTime5 size={props.size} />
    }
    if (hour === '6' || hour === '18') {
        hourIcon = <Icon.WiTime6 size={props.size} />
    }
    if (hour === '7' || hour === '19') {
        hourIcon = <Icon.WiTime7 size={props.size} />
    }
    if (hour === '8' || hour === '20') {
        hourIcon = <Icon.WiTime8 size={props.size} />
    }
    if (hour === '9' || hour === '21') {
        hourIcon = <Icon.WiTime9 size={props.size} />
    }
    if (hour === '10' || hour === '22') {
        hourIcon = <Icon.WiTime10 size={props.size} />
    }
    if (hour === '11' || hour === '23') {
        hourIcon = <Icon.WiTime11 size={props.size} />
    }

    return(
        <div>
            {hourIcon}
        </div>
    );
}

export default ClockIcon;