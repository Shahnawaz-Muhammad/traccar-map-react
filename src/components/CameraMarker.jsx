import React from "react";
import { Marker, Popup } from "react-leaflet";
import { iconCamera } from "../components/markerIcons"; // Assuming you have a camera icon

const CameraMarker = ({ camera }) => {
  return (
    <Marker position={[camera.latitude, camera.longitude]} icon={iconCamera}>
      <Popup>
        
        Location: <strong>{camera.phase}</strong>, {camera.sector}
        <br />
        Category: {camera.category}
        <br />
        Installed by: {camera.createdBy}
        <br />
        Description: {camera.description}
      </Popup>
    </Marker>
  );
};

export default CameraMarker;
