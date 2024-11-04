"use client";

import { useState } from "react";
import Modal from "@/components/ui/modal";
import { type PhotoCard as PhotoCardType, videos } from "./constant";
import PhotoCard from "./photo-card";
import { cn } from "@/lib/utils";

const PhotoCards = () => {
  const [selectedCard, setSelectedCard] = useState<PhotoCardType>();

  const handleClickVideo = (target: PhotoCardType) => {
    setSelectedCard(target);
  };

  return (
    <div className="pb-[12px] overflow-x-auto border-b border-gray-200">
      <Modal
        trigger={
          <div className="flex gap-[8px] w-full p-[4px]">
            {videos.map((video) => (
              <video
                key={video.src}
                width={video.size}
                autoPlay
                muted
                loop
                onClick={() => handleClickVideo(video)}
              >
                <source src={video.src} type="video/mp4" />
              </video>
            ))}
          </div>
        }
        content={<PhotoCard card={selectedCard} />}
      />
    </div>
  );
};

export default PhotoCards;
