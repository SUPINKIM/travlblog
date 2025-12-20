"use client";

import { motion } from "framer-motion";

interface PixelTypingProps {
  text: string;
  delay?: number;
  className?: string;
}

export function PixelTyping({
  text,
  delay = 0,
  className = "",
}: PixelTypingProps) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className={className}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + i * 0.05 }}
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
