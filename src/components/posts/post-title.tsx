"use client";

import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface PostTitleProps {
  title: string;
  thumbnail?: string;
}

const PostTitle: FC<PostTitleProps> = ({ title, thumbnail }) => {
  const titleRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((args) => {
      const [target] = args;

      setVisible(target.isIntersecting);
    });

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={titleRef}
        className={cn(
          "relative flex items-center justify-center z-1 w-full rounded-[12px]",
          thumbnail ? "sm:h-[240px] h-[160px]" : "h-fit"
        )}
      >
        <p
          className={cn(
            "text-[24px] sm:text-[28px] font-medium z-[1]",
            thumbnail ? "text-white" : "text-black"
          )}
        >
          {title}
        </p>
        {thumbnail && (
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={thumbnail}
              alt="header-image"
              fill
              className="object-fill opacity-60 rounded-[12px]"
            />
            <div className="size-full bg-gray-400 rounded-[12px]" />
          </div>
        )}
      </div>
      {!isVisible && (
        <div className="fixed z-10 font-medium text-[14px] right-6 top-[33px] sm:left-[160px]">
          {title}
        </div>
      )}
    </div>
  );
};

export default PostTitle;
