"use client";

import { Mountain } from "lucide-react";

import ClimbingCard from "@/components/climbing/card";

const ClimbingPage = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Mountain size={20} className="text-brand-amber" />
        <h1 className="text-2xl font-bold">Climbing</h1>
      </div>

      <p className="text-muted-foreground mb-6">
        내가 가봤던 암장들
      </p>

      <div className="flex gap-4 flex-wrap sm:justify-normal justify-center">
        <ClimbingCard
          title="킨디 클라이밍"
          imageUrl="/climbing/kin_d.png"
          subTitle="경기도 수원시 권선구 서둔동 388"
        />

        <ClimbingCard
          title="더클라임 강남점"
          imageUrl="/climbing/theclimb_gangnam.png"
          subTitle="서울특별시 강남구 테헤란로8길 21 지하 1층"
        />

        <ClimbingCard
          title="더클라임 성수점"
          imageUrl="/climbing/theclimb_sungsu.jpg"
          subTitle="서울특별시 성동구 아차산로17길 49 지하 1층"
        />
      </div>
    </div>
  );
};

export default ClimbingPage;
