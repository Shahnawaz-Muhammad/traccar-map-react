// src/components/VehicleMap.jsx
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { vehicleData } from "../../api/data";
import LocationMarker from "../../components/LocationMarker";
import VehicleMarker from "../../components/VehicleMarker";

// JSON Data for Vehicles (You can replace it with API data if needed)


const VehicleMap = () => {
  return (
    <MapContainer
      center={[25.2048, 55.2708]} // Default center (Dubai)
      zoom={10}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {vehicleData.map((vehicle) => (
        <VehicleMarker
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}
      <LocationMarker  />
    </MapContainer>
  );
};

export default VehicleMap;
