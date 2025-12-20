"use client";

interface PixelIconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-4xl",
};

export function PixelIcon({
  name,
  size = "md",
  className = "",
}: PixelIconProps) {
  return (
    <i
      className={`hn hn-${name} ${sizeMap[size]} ${className}`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}
