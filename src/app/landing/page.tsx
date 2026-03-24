"use client";

import { MutableRefObject, useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export default function Landing() {
  const slide1Ref = useRef<HTMLDivElement | null>(null);
  const slide2Ref = useRef<HTMLDivElement | null>(null);
  const slide3Ref = useRef<HTMLDivElement | null>(null);

  const setStyle = (
    scrollY: number,
    baseLine: number,
    ref: MutableRefObject<HTMLDivElement | null>,
  ) => {
    const element = ref.current;

    if (!element) return;

    if (scrollY >= baseLine) {
      element.style.transform = `translateY(-100px)`;
      element.style.transitionDuration = "0.7s";
      element.style.opacity = "0";
    } else {
      element.style.transform = `translateY(0px)`;
      element.style.transitionDuration = "0.8s";
      element.style.opacity = "1";
    }
  };

  const scrollEvent = useCallback(() => {
    const startY = window.scrollY;

    setStyle(startY, 1800, slide1Ref);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    scrollEvent();
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <div id="sticky-container" className="h-[7100px]">
      <div id="sticky" className="sticky top-0 h-[100vh] bg-slate-200 w-full">
        <div
          id="slide-container"
          className="flex items-center relative justify-center h-full w-full"
        >
          <div
            ref={slide1Ref}
            id="slide1"
            className={cn("absolute text-[32px]", "block")}
          >
            🍎
          </div>
          <div
            ref={slide2Ref}
            id="slide2"
            className={cn("absolute text-[32px]", "hidden")}
          >
            🥑
          </div>
          <div ref={slide3Ref} id="slide3" className={cn("absolute", "hidden")}>
            소개 3
          </div>
        </div>
      </div>
    </div>
  );
}
