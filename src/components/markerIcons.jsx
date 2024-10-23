import L from 'leaflet';

import automobileSVG from '../assets/icons/automobile.svg';
import complaintSvg from '../assets/icons/complaint1.svg';
import locationSvg from '../assets/icons/location1.svg';


export const iconDriver = new L.Icon({
    iconUrl: automobileSVG,
    iconSize: [40, 40]
});

export const iconComplaint = new L.Icon({
    iconUrl: complaintSvg,
    iconSize: [40, 40]
});

export const iconLocation = new L.Icon({
    iconUrl: locationSvg,
    iconSize: [40, 40]
});
