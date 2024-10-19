"use client";

import { cn } from "@/lib/utils";
import { FC, useEffect, useRef, useState } from "react";

interface PostTitleProps {
  title: string;
}

const PostTitle: FC<PostTitleProps> = ({ title }) => {
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
    <div>
      <div ref={titleRef} className={"text-[24px] font-semibold"}>
        {title}
      </div>
      {!isVisible && (
        <div className="fixed font-medium text-[14px] right-6 top-[33px] sm:left-[160px]">
          {title}
        </div>
      )}
    </div>
  );
};

export default PostTitle;
