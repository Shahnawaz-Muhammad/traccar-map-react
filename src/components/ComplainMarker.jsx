import React from "react";
import { Marker, Popup } from "react-leaflet";
import { iconComplaint } from "../components/markerIcons";

const ComplainMarker = ({ complaint }) => {
  return (
    <Marker
      
      position={[complaint.latitude, complaint.longitude]}
      icon={iconComplaint}
    >
      <Popup>
        <strong>{complaint.residentName}</strong>
        <br />
        Complain Type: {complaint.type}
        <br />
        Status: {complaint.status}
        <br />
        Assigned To: {complaint.assignedTo}
        <br />
        Submitted Date: {new Date(complaint.submittedDate).toLocaleString()}
      </Popup>
    </Marker>
  );
};

export default ComplainMarker;
