import L from 'leaflet';

import automobileSVG from '../assets/icons/automobile.svg';
import locationSVG from '../assets/icons/location1.svg';


export const iconDriver = new L.Icon({
    iconUrl: automobileSVG,
    iconSize: [40, 40]
});

export const iconLocation = new L.Icon({
    iconUrl: locationSVG,
    iconSize: [40, 40]
});
