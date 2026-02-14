"use client";

import { Music, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { CustomAudioContext } from "./model";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const audiContext = useRef<CustomAudioContext>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    audiContext.current = new CustomAudioContext(audioRef.current);
  }, []);

  const handleClickPlay = () => {
    audiContext.current?.play();
    setIsPlaying(true);
  };

  const handleClickStop = () => {
    audiContext.current?.pause();
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <div className="glass rounded-2xl p-3 flex items-center gap-3 glow-sm">
        <div className="relative">
          <div
            className={`w-10 h-10 rounded-full bg-surface-3 flex items-center justify-center ${isPlaying ? "animate-spin" : ""}`}
            style={{ animationDuration: "3s" }}
          >
            <Music size={16} className="text-brand-cyan" />
          </div>
        </div>
        <audio
          ref={audioRef}
          src="/player/We_Wish_You_a_Merry_Christmas.wav"
        />
        <button
          onClick={isPlaying ? handleClickStop : handleClickPlay}
          className="w-9 h-9 rounded-full bg-brand-cyan/20 hover:bg-brand-cyan/30 flex items-center justify-center transition-colors"
        >
          {isPlaying ? (
            <Pause size={14} className="text-brand-cyan" />
          ) : (
            <Play size={14} className="text-brand-cyan translate-x-[1px]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Player;
