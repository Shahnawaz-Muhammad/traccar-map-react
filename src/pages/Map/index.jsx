// src/components/VehicleMap.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { vehicleData, complaintData, gateData,camerasData } from "../../api/data";
import LocationMarker from "../../components/LocationMarker";
import VehicleMarker from "../../components/VehicleMarker";
import ComplainMarker from "../../components/ComplainMarker";
import GateMarker from "../../components/GateMarker";
// import CameraMarker from "../../components/CameraMarker";
import MarkerClusterGroup from "react-leaflet-cluster";
import CameraMarker from "../../components/CameraMarker";

const MapTile = () => {
  const [vehicles, setVehicles] = useState(vehicleData);
  const [complains, setComplains] = useState(complaintData);
  const [gates, setGates] = useState(gateData);
  const [cameras, setCameras] = useState(camerasData);

  console.log(cameras, 'cameras')

  useEffect(() => {
    const interval = setInterval(() => {
      // Update each vehicle's position (this is just simulated random movement)
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) => ({
          ...vehicle,
          latitude: vehicle.latitude + (Math.random() - 0.5) * 0.001,
          longitude: vehicle.longitude + (Math.random() - 0.5) * 0.001,
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
      <MarkerClusterGroup chunkedLoading>
        {vehicles.map((vehicle) => {
          
          return <VehicleMarker key={vehicle.id} vehicle={vehicle}/>;
        })}
      </MarkerClusterGroup>
      
      <MarkerClusterGroup chunkedLoading>
        {complains.map((complaint) => (
          <ComplainMarker key={complaint.complaintId} complaint={complaint} />
        ))}{" "}
      </MarkerClusterGroup>

      <MarkerClusterGroup chunkedLoading>
        {cameras.map((camera) => (
          <CameraMarker key={camera.id} camera={camera} />
        ))}
      </MarkerClusterGroup>
      
      <MarkerClusterGroup chunkedLoading>
        {gates.map((gate) => (
          <GateMarker key={gate.id} gate={gate} />
        ))}{" "}
      </MarkerClusterGroup>
      {/* <LocationMarker /> */}
    </MapContainer>
  );
};

export default MapTile;
