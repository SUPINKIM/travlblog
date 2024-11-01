"use client";

import { FC, useLayoutEffect, useState } from "react";
import { Countries } from "../types";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { location, locationTitle } from "./types";

interface MapCanvasProps {
  selectedCountry?: Countries;
}

const MapCanvas: FC<MapCanvasProps> = ({ selectedCountry }) => {
  const { isLoaded } = useJsApiLoader({
    id: "travle-blog",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [zoom, setZoom] = useState(1);

  useLayoutEffect(() => {
    setZoom(6);
  }, []);

  return isLoaded ? (
    <div className="w-full h-[280px] px-[16px] sm:h-[380px] md:h-[560px]">
      <GoogleMap
        zoom={zoom}
        mapContainerStyle={{ height: "100%", width: "100%" }}
        mapContainerClassName="h-full"
        center={
          selectedCountry ? location[selectedCountry] : location.Australia
        }
      >
        {selectedCountry && (
          <Marker
            position={location[selectedCountry]}
            title={locationTitle[selectedCountry]}
          />
        )}
      </GoogleMap>
    </div>
  ) : (
    <div className="my-[8px] flex justify-center">loading...</div>
  );
};

export default MapCanvas;
