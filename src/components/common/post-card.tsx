"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const DEFAULT_BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Vw8AAkEBX6r220kAAAAASUVORK5CYII=" as const;

interface PostCardProps {
  id: number;
  imageUrl: string;
  title: string;
  subTitle?: string;
}

const PostCard: FC<PostCardProps> = ({ id, imageUrl, title, subTitle }) => {
  return (
    <Link href={`/posts/${id}`}>
      <div className="w-[340px] rounded-xl overflow-hidden bg-surface-2 border border-border hover:border-border/80 hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
        <div className="relative w-full h-[150px] overflow-hidden">
          <Image
            src={imageUrl}
            alt="thumbnail"
            sizes="340px"
            fill
            placeholder="blur"
            blurDataURL={DEFAULT_BLUR_DATA_URL}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-foreground text-base mb-1">
            {title}
          </h3>
          {subTitle && (
            <p className="text-sm text-muted-foreground">{subTitle}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
