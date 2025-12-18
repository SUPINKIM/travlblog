"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}

export function ScrollSection({
  children,
  className = "",
  direction = "up",
}: ScrollSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    up: { opacity: 0, y: 80 },
    left: { opacity: 0, x: -80 },
    right: { opacity: 0, x: 80 },
  };

  return (
    <motion.section
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
