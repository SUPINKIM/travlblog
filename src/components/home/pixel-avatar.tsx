"use client";

import { motion } from "framer-motion";

import { AVATAR_PIXELS } from "@/constant/home-data";

interface PixelAvatarProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const sizeMap = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
};

export function PixelAvatar({
  size = "lg",
  animated = true,
}: PixelAvatarProps) {
  const content = (
    <>
      {AVATAR_PIXELS.map((pixel, i) => (
        <div key={i} className={pixel ? "bg-yellow-400" : "bg-transparent"} />
      ))}
    </>
  );

  const className = `${sizeMap[size]} bg-slate-800 border-4 border-cyan-400 shadow-[8px_8px_0_#06b6d4] grid grid-cols-8 grid-rows-8`;

  if (animated) {
    return (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={className}
      >
        {content}
      </motion.div>
    );
  }

  return <div className={className}>{content}</div>;
}
