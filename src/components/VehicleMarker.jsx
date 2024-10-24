import React from "react";
import { Marker, Popup } from "react-leaflet";
import { iconDriver,  iconBus, iconTruck  } from "../components/markerIcons";

const VehicleMarker = ({ vehicle }) => {
  let icon;
  if (vehicle.type === "car") {
    icon = iconDriver;
  }
  if (vehicle.type === "bus") {
    icon = iconBus;
  } else if (vehicle.type === "truck") {
    icon = iconTruck;
  }

  if (!vehicle.latitude || !vehicle.longitude || !icon) {
    console.error("Invalid vehicle data:", vehicle);
    return null;
  }

  return (
    <Marker position={[vehicle.latitude, vehicle.longitude]} icon={icon}>
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
