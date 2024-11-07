"use client";

import { useState } from "react";

import TripPostCards from "./trip-post-cards";
import TripPostSelect from "./trip-post-select";

const TripPosts = () => {
  const [country, setCountry] = useState("");

  return (
    <>
      <div className="py-[12px]">
        <div className="flex gap-[8px] justify-between flex-wrap">
          <TripPostSelect setCountry={setCountry} />
        </div>
      </div>
      <div className="flex pb-[8px] items-center min-[746px]:justify-start justify-center gap-x-[18px] w-full flex-wrap gap-y-[24px]">
        <TripPostCards country={country} />
      </div>
    </>
  );
};

export default TripPosts;
