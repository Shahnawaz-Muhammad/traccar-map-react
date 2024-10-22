import React from "react";
import { Marker, Popup } from "react-leaflet";
import { iconDriver } from "../components/markerIcons";

const VehicleMarker = ({ vehicle }) => {
  return (
    <Marker
      key={vehicle.id}
      position={[vehicle.latitude, vehicle.longitude]}
      icon={iconDriver}
    >
      <Popup>
        <strong>{vehicle.model}</strong>
        <br />
        Plate Number: {vehicle.plateNumber}
        <br />
        Status: {vehicle.status}
        <br />
        Last Updated: {new Date(vehicle.lastUpdated).toLocaleString()}
      </Popup>
    </Marker>
  );
};

export default VehicleMarker;
