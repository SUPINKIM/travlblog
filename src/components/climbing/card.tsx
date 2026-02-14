"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface ClimbingCardProps {
  imageUrl?: string;
  title: string;
  subTitle?: string;
}

const ClimbingCard: FC<ClimbingCardProps> = ({ imageUrl, title, subTitle }) => {
  return (
    <div className="w-[340px] rounded-xl overflow-hidden bg-surface-2 border border-border hover:border-border/80 transition-all group">
      {imageUrl && (
        <div className="relative w-full h-[160px] overflow-hidden">
          <Image
            width={340}
            height={160}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        {subTitle && (
          <p className="text-xs text-muted-foreground flex items-start gap-1.5">
            <MapPin size={12} className="shrink-0 mt-0.5" />
            {subTitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default ClimbingCard;
