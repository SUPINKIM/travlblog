"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { CustomAudioContext } from "./model";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const audiContext = useRef<CustomAudioContext>();

  useEffect(() => {
    if (!audioRef.current) return;
    audiContext.current = new CustomAudioContext(audioRef.current);
  }, []);

  const handleClickPlay = () => {
    audiContext.current?.play();
  };

  const handleClickStop = () => {
    audiContext.current?.pause();
  };

  return (
    <div className="fixed bottom-4 right-8 z-[999]">
      <div className="flex justify-center flex-col items-center gap-[8px]">
        <div className="relative">
          <Image
            className="rounded-[20px]"
            src="/player/christmas.png"
            alt="santa"
            width={120}
            height={120}
          />
          <div className="absolute -top-[20px] -right-[20px]">
            <Image
              src="/player/lp_record.webp"
              alt="lp_player"
              width={60}
              height={60}
              className="animate-spin"
            />
          </div>
        </div>
        <audio
          ref={audioRef}
          src="/player/We_Wish_You_a_Merry_Christmas.wav"
          autoPlay
        />
        {/* Play / Pause button only */}
        <div className="flex items-center justify-center">
          <button
            className="inline-flex h-16 w-[120px] items-center justify-center rounded-[20px] bg-red-400/80 text-slate-950 shadow-lg shadow-red-500/40 hover:bg-red-300 transition-colors"
            aria-label={"player"}
          >
            <Pause onClick={handleClickStop} className="h-7 w-7" />
            <Play
              onClick={handleClickPlay}
              className="h-7 w-7 translate-x-[1px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
