"use client";

import { useState } from "react";
import Modal from "@/components/ui/modal";
import { type PhotoCard as PhotoCardType, videos } from "./constant";
import PhotoCard from "./photo-card";
import { cn } from "@/lib/utils";

const PhotoCards = () => {
  return (
    <div className="pb-[12px] overflow-x-auto border-b border-gray-200">
      <div className="flex gap-[8px] w-full p-[4px]">
        {videos.map((video) => (
          <div key={video.src} className="w-[420px] h-[260px]">
            <video width={video.size} autoPlay muted loop>
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCards;
