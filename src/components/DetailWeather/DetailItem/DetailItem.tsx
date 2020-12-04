import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import * as Icon from 'react-icons/wi'
import DetailItemType from './DetailItemTypes';

interface DetailItemProps {
    itemType: DetailItemType,
    value: string
}

const DetailItem: React.FC<DetailItemProps> = (props) => {

    let itemIcon = <Icon.WiAlien size={42} />
    let itemValue = 'NA';
    let itemDescription = 'NA';

    switch (props.itemType) {
        case DetailItemType.PRECIPITATION_CHANCE:
            itemIcon = <Icon.WiUmbrella size={42} />
            itemValue = props.value + ' %';
            itemDescription = 'Chance';
            break;
        case DetailItemType.WIND:
            itemIcon = <Icon.WiStrongWind size={42} />
            itemValue = props.value + ' km/h';
            itemDescription = 'Wind speed';
            break;
        case DetailItemType.UV_INDEX:
            itemIcon = <Icon.WiSolarEclipse size={42} />
            itemValue = props.value;
            itemDescription = 'UV index';
            break;
        case DetailItemType.CLOUD_COVER:
            itemIcon = <Icon.WiCloudRefresh size={42} />
            itemValue = props.value + ' %';
            itemDescription = 'Cloud cover';
            break;
        case DetailItemType.PRESSURE:
            itemIcon = <Icon.WiBarometer size={42} />
            itemValue = props.value + ' mmHg';
            itemDescription = 'Pressure';
            break;
        case DetailItemType.HUMIDITY:
            itemIcon = <Icon.WiHumidity size={42} />
            itemValue = props.value + ' %';
            itemDescription = 'Humidity';
            break;
        case DetailItemType.DEW_POINT:
            itemIcon = <Icon.WiThermometerInternal size={42} />
            itemValue = props.value + ' °';
            itemDescription = 'Dew point';
            break;
        case DetailItemType.VISIBILITY:
            itemIcon = <Icon.WiTrain size={42} />
            itemValue = props.value + ' km';
            itemDescription = 'Visibility';
            break;
        case DetailItemType.SUNRISE:
            itemIcon = <Icon.WiSunrise size={42} />
            itemValue = props.value;
            itemDescription = 'Sunrise';
            break;
        case DetailItemType.SUNSET:
            itemIcon = <Icon.WiSunset size={42} />
            itemValue = props.value;
            itemDescription = 'Sunset';
            break;
        default:
            break;
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <div style={{textAlign: 'right'}}>
                    {itemIcon}
                </div>
            </Grid>
            <Grid item xs={8}>
                <div style={{textAlign: 'left'}}>
                    <Typography variant='subtitle2'><strong>{itemValue}</strong></Typography>
                    <Typography variant='body2'>{itemDescription}</Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default DetailItem;