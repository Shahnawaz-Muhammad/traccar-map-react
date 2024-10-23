import React, { useState, useEffect } from "react";
import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { iconLocation } from "../components/markerIcons";

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);


  return position === null ? null : (
    <Marker position={position} icon={iconLocation}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default LocationMarker;