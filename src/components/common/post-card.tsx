"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Card, CardContent, CardFooter } from "../ui/card";

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
      <Card className="w-[340px] hover:cursor-pointer hover:-translate-y-1.5">
        <CardContent className="w-full grid grid-cols-1 gap-y-[12px] px-0 pb-0">
          <div className="relative w-full h-[150px]">
            <Image
              src={imageUrl}
              alt="thumbnail"
              sizes="140px"
              fill
              placeholder="blur"
              blurDataURL={DEFAULT_BLUR_DATA_URL}
              className="rounded-t-[12px]"
            />
          </div>
          <span className="px-[16px] font-semibold text-[18px]">{title}</span>
        </CardContent>
        {subTitle && (
          <CardFooter className="px-[16px] mt-[8px] text-gray-600">
            {subTitle}
          </CardFooter>
        )}
      </Card>
    </Link>
  );
};

export default PostCard;
