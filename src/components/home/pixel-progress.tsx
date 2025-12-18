"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { PixelIcon } from "./pixel-icon";

interface PixelProgressProps {
  label: string;
  value: number;
  color: string;
  icon?: string;
}

export function PixelProgress({
  label,
  value,
  color,
  icon,
}: PixelProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-xs items-center">
        <span className="flex items-center gap-2">
          {icon && (
            <PixelIcon name={icon} size="sm" className="text-cyan-400" />
          )}
          {label}
        </span>
        <span className="text-yellow-400">{value}/100</span>
      </div>
      <div className="h-4 bg-slate-700 border-2 border-slate-500 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color}`}
        />
        {/* 픽셀 그리드 오버레이 */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 50%, rgba(0,0,0,0.3) 50%)",
            backgroundSize: "4px 100%",
          }}
        />
      </div>
    </div>
  );
}
