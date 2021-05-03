import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMaker";
import DraggableMarker from "./DraggableMarker";
import Weather from "./Weather";
import Chart from "./Chart";

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
  const [temp, setTemp] = useState([]);
  
  function onClickFunc(){
      setLoaded(false)
  }

  console.log(loaded)
  return (
    <div>
      <MapContainer
        id="mapContainer"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!loaded ? (
          <LocationMarker
            position={position}
            setLoaded={setLoaded}
            setPosition={setPosition}
          />
        ) : (
          <DraggableMarker position={position} setPosition={setPosition} />
        )}
      </MapContainer>
      <Weather position={position} setTemp={setTemp} />
      <div>
        <Chart temp={temp} />
        <button onClick={onClickFunc}>Home</button>
      </div>
    </div>
  );
};
