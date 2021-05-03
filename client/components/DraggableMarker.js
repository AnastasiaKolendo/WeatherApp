import { Marker} from "react-leaflet";
import React, {useState, useRef, useMemo} from "react";
  
  export default function DraggableMarker(props) {
    const [draggable] = useState(true)
    const markerRef = useRef(null)

    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            props.setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
  
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={props.position}
        ref={markerRef}>
      </Marker>
    )
  }