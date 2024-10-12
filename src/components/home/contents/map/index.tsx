"use client";

import Image from "next/image";
import FlagButton from "./flag-button";
import { useState } from "react";
import { Countries } from "../types";
import MapBackground from "./background";

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<Countries>();

  return (
    <div className="grid grid-cols-1 gap-y-[8px] border-t border-gray-200">
      <h2 className="font-semibold mt-[12px] text-[16px]">
        Which countries have you been before?
      </h2>
      <div className="flex items-center gap-[4px] flex-wrap justify-center">
        <FlagButton
          selectedCountry={selectedCountry}
          onClick={(country) => setSelectedCountry(country)}
        />
      </div>
      <div>
        <MapBackground selectedCountry={selectedCountry} />
      </div>
    </div>
  );
};

export default WorldMap;