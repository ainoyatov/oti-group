'use client';

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  
    const {isLoaded} = useLoadScript({
      
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API!
    });
  
    function Map() {
  
    const center = useMemo(() => ({lat: 33.61636, lng: -111.90330}), []);
  
      return(
        <GoogleMap
          zoom={12}
          center={center}
          mapContainerClassName="map__container"
        >
          <Marker position={center} />
        </GoogleMap>
      )
      
    }
    
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
  
    else {
      return <Map />;
    }
  
  }
  
export default Maps