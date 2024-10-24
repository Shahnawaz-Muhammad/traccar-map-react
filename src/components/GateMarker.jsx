import React from "react";
import { Marker, Popup } from "react-leaflet";
import { gateIcon } from "./markerIcons";

const GateMarker = ({gate}) => {
  return (
    <Marker
          key={gate.id}
          position={[gate.latitude, gate.longitude]}
          icon={gateIcon} // Optional custom gate icon
        >
          <Popup>
            <strong>{gate.name}</strong>
            <br />
            {gate.description}
            <br />
            <strong>Systems:</strong>
            <ul>
              <li>Access Control: {gate.systems.accessControl}</li>
              <li>Security Personnel: {gate.systems.securityPersonnel}</li>
              <li>Cameras: {gate.systems.cameras}</li>
              <li>Vehicle Check: {gate.systems.vehicleCheck}</li>
            </ul>
          </Popup>
        </Marker>
  )
}

export default GateMarker