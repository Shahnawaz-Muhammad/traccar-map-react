import L from 'leaflet';

import automobileSVG from '../assets/icons/automobile.svg';
import complaintSvg from '../assets/icons/complaint1.svg';
import locationSvg from '../assets/icons/location1.svg';
import barrierSvg from '../assets/icons/barrier-blackbg.svg';
import busSvg from '../assets/icons/bus.svg';
import truckSvg from '../assets/icons/truck-icon.svg';
import cameraSvg from '../assets/icons/cctv.svg';



export const iconDriver = new L.Icon({
    iconUrl: automobileSVG,
    iconSize: [40,40],
  iconAnchor: [12, 21],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [23, 23],
});

export const iconComplaint = new L.Icon({
    iconUrl: complaintSvg,
    iconSize: [40,40],
  iconAnchor: [12, 21],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [23, 23],
});

export const iconCamera = new L.Icon({
    iconUrl: cameraSvg,
    iconSize: [40,40],
  iconAnchor: [12, 21],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [23, 23],
});



export const iconLocation = new L.Icon({
    iconUrl: locationSvg,
    iconSize: [40,40],
  iconAnchor: [12, 21],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [23, 23],
});

export const iconBus = new L.Icon({
    iconUrl: busSvg,
    iconSize: [40,40],
  iconAnchor: [12, 21],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [23, 23],
});

export const iconTruck = new L.Icon({
    iconUrl: truckSvg,
    iconSize: [40,40],
  iconAnchor: [12, 21],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [23, 23],
});

export const gateIcon = new L.Icon({
    iconUrl: barrierSvg,
    iconSize: [40,40],
  iconAnchor: [12, 21],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [23, 23]
  });