// src/components/VehicleMap.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { vehicleData, complaintData } from "../../api/data";
import LocationMarker from "../../components/LocationMarker";
import VehicleMarker from "../../components/VehicleMarker";
import ComplainMarker from "../../components/ComplainMarker";

const MapTile = () => {
  const [vehicles, setVehicles] = useState(vehicleData);
  const [complains, setComplains] = useState(complaintData);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update each vehicle's position (this is just simulated random movement)
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) => ({
          ...vehicle,
          latitude: vehicle.latitude + (Math.random() - 0.5) * 0.001,
          longitude: vehicle.longitude + (Math.random() - 0.5) * 0.01,
        }))
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <MapContainer
      center={[33.6844, 73.0479]} // Default center (Dubai)
      zoom={10}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {vehicles.map((vehicle) => (
        <VehicleMarker
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}
      {complains.map((complaint) => (
        <ComplainMarker
          key={complaint.complaintId}
          complaint={complaint}
        />
      ))}
      <LocationMarker  />
    </MapContainer>
  );
};

export default MapTile;
