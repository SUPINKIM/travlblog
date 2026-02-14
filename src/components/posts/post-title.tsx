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
    <div className="w-full max-w-[800px]">
      <div
        ref={titleRef}
        className={cn(
          "relative flex items-center justify-center z-[1] w-full rounded-xl overflow-hidden",
          thumbnail ? "sm:h-[280px] h-[160px]" : "h-fit py-6"
        )}
      >
        <p
          className={cn(
            "text-2xl sm:text-3xl font-bold z-[1] text-center px-4",
            thumbnail ? "text-white" : "text-foreground"
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
              className="object-cover opacity-40 rounded-xl"
            />
            <div className="absolute inset-0 bg-background/60 rounded-xl" />
          </div>
        )}
      </div>
      {!isVisible && (
        <div className="fixed z-10 font-medium text-sm right-6 top-[18px] text-foreground">
          {title}
        </div>
      )}
    </div>
  );
};

export default PostTitle;
