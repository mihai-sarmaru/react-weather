import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import * as Icon from 'react-icons/wi'
import { useSelector } from 'react-redux';
import DetailItemType from './DetailItemTypes';
import { AppState } from '../../../store/rootStore';

interface DetailItemProps {
    itemType: DetailItemType,
    value: number | string
}

const DetailItem: React.FC<DetailItemProps> = (props) => {

    const localization = useSelector((state: AppState) => state.localizationReducer.language);

    let itemIcon = <Icon.WiAlien size={42} />
    let itemValue = 'NA';
    let itemDescription = 'NA';

    switch (props.itemType) {
        case DetailItemType.PRECIPITATION_CHANCE:
            itemIcon = <Icon.WiUmbrella size={42} color='#666' />
            itemValue = props.value + ' %';
            itemDescription = localization.language.get('detail-chance')!;
            break;
        case DetailItemType.WIND:
            itemIcon = <Icon.WiStrongWind size={42} color='#becbd1' />
            itemValue = props.value + ' km/h';
            itemDescription = localization.language.get('detail-wind')!;
            break;
        case DetailItemType.UV_INDEX:
            itemIcon = <Icon.WiSolarEclipse size={42} color='#cbad33' />
            itemValue = props.value as string;
            itemDescription = localization.language.get('detail-uv')!;
            break;
        case DetailItemType.CLOUD_COVER:
            itemIcon = <Icon.WiCloudRefresh size={42} color='#becbd1' />
            itemValue = props.value + ' %';
            itemDescription = localization.language.get('detail-cloud')!;
            break;
        case DetailItemType.PRESSURE:
            itemIcon = <Icon.WiBarometer size={42} color='#666' />
            itemValue = props.value + ' mmHg';
            itemDescription = localization.language.get('detail-pressure')!;
            break;
        case DetailItemType.HUMIDITY:
            itemIcon = <Icon.WiHumidity size={42} color='#86c3d6' />
            itemValue = props.value + ' %';
            itemDescription = localization.language.get('detail-humidity')!;
            break;
        case DetailItemType.DEW_POINT:
            itemIcon = <Icon.WiThermometerInternal size={42} color='#86c3d6' />
            itemValue = props.value + ' °';
            itemDescription = localization.language.get('detail-dew')!;
            break;
        case DetailItemType.VISIBILITY:
            itemIcon = <Icon.WiTrain size={42} color='#999' />
            itemValue = props.value + ' km';
            itemDescription = localization.language.get('detail-visibility')!;
            break;
        case DetailItemType.SUNRISE:
            itemIcon = <Icon.WiSunrise size={42} color='#edcf53' />
            itemValue = props.value as string;
            itemDescription = localization.language.get('detail-sunrise')!;
            break;
        case DetailItemType.SUNSET:
            itemIcon = <Icon.WiSunset size={42} color='#edcf53' />
            itemValue = props.value as string;
            itemDescription = localization.language.get('detail-sunset')!;
            break;
        default:
            break;
    }

    return(
        <Grid container spacing={2} style={{marginTop: '1px'}}>
            <Grid item xs={4}>
                <div style={{textAlign: 'right'}}>
                    {itemIcon}
                </div>
            </Grid>
            <Grid item xs={8}>
                <div style={{textAlign: 'left'}}>
                    <Typography variant='subtitle2' className='typography-primary'><strong>{itemValue}</strong></Typography>
                    <Typography variant='body2' className='typography-secondary'>{itemDescription}</Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default DetailItem;