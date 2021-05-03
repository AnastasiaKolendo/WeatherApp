import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useEffect } from "react";
import React from "react";

export default function LocationMarker(props) {
  useEffect(() => {
    map.locate();
  });

  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
      props.setPosition(e.latlng);
      props.setLoaded(true);
    },
  });

  console.log(props.position);
  return props.position === null ? null : (
    <Marker position={props.position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
