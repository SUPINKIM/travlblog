"use client";

import { motion } from "framer-motion";

import { PixelIcon } from "./pixel-icon";

interface FloatingElement {
  icon: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  duration: number;
  direction?: "up" | "down";
}

interface FloatingElementsProps {
  elements: readonly FloatingElement[] | FloatingElement[];
}

export function FloatingElements({ elements }: FloatingElementsProps) {
  return (
    <>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          animate={{ y: el.direction === "down" ? [0, 20, 0] : [0, -20, 0] }}
          transition={{ duration: el.duration, repeat: Infinity }}
          className="absolute"
          style={el.position}
        >
          <PixelIcon name={el.icon} size="xl" className="text-cyan-400/60" />
        </motion.div>
      ))}
    </>
  );
}
