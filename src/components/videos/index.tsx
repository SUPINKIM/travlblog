"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { videos } from "./constant";

const buttons = [
  { id: "red", color: "bg-red-500" },
  { id: "yellow", color: "bg-yellow-400" },
  { id: "green", color: "bg-green-600" },
] as const;

const Video = () => {
  const [isVisible, setVisible] = useState(true);

  const handleVisible = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full flex justify-center p-[16px]"
        >
          <div className="bg-gray-800 max-w-[800px] rounded-[8px] px-[24px] pt-[16px] pb-[32px] grid grid-cols-1">
            <div className="pb-[16px] flex items-center gap-x-[6px]">
              {buttons.map(({ id, color }) => (
                <div
                  key={id}
                  className={cn(
                    "rounded-full size-[12px] shrink-0 cursor-pointer",
                    color
                  )}
                  onClick={id === "red" ? handleVisible : undefined}
                />
              ))}
            </div>
            <video autoPlay muted loop className="object-cover w-full">
              <source src={videos[0].src} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}
      {!isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full p-[24px] flex h-[600px] items-center justify-center"
        >
          <div className="flex flex-wrap min-h-[250px] whitespace-pre-wrap leading-[28px] break-keep bg-white max-w-[800px] rounded-[8px] p-[16px] text-gray-950">
            <span>
              호주 첫날이었어요. 아침 일찍 캐리어만 숙소에 맡기고 무거운 백팩을
              매고 하루 종일 시드니를 돌아다녔어요.
            </span>
            <span>
              숙소는 하버에서 꽤 먼 제틀랜드라는 곳에 있었어요. 거의 두 시간을
              걸어 구글 맵을 따라 보타닉 가든을 지나서 계속 걷다보니 하버
              브릿지가 보였어요.. 그리고 모습을 드러내는 오페라 하우스.🇦🇺
            </span>
            <span>
              첫 오페라 하우스를 마주한 순간은 잊을 수 없을 거에요. 하버
              브릿지와 바로 옆에 있는지 몰랐는데 정말 너무 예쁘고
              아름답더라고요. 아마도 날씨가 다 한 거 아닐까요? 😍
            </span>
            <span>
              저녁에는 시드니 천문대에 올라서 하버 브릿지를 감상했어요. 중간에
              같이 올라가던 외국인 커플이 이 쪽은 길이 없다며 친절도
              베풀어주었죠. 예쁜 노을이 지는 걸 보면서 시드니에서의 첫 날을
              마무리했습니다.
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Video;
