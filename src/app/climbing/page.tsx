"use client";

import ClimbingCard from "@/components/climbing/card";
import { Button } from "@/components/ui/button";

// 킨디
// 더클
// 더클 성수, 사당, 일산, 강남

// 클팍 성수
// 왕십리 훅 클라이밍
// 문정 닷 클라이밍
// 역삼 볼더 하이웨이

const ClimbingPage = () => {
  return (
    <div>
      <header className="flex gap-x-[8px]">
        <Button variant="outline" disabled>
          암장 추가하기
        </Button>
      </header>

      <div className="grid grid-cols-1 gap-[12px] mt-[16px]">
        <p className="text-[18px] font-medium pl-[8px]">
          내가 가봤던 암장들 😎 🧗
        </p>

        <div className="flex gap-[8px] flex-wrap sm:justify-normal justify-center">
          <ClimbingCard
            title="킨디 클라이밍"
            imageUrl="/climbing/kin_d.png"
            subTitle="주소 : 경기도 수원시 권선구 서둔동 388"
          />

          <ClimbingCard
            title="더클라임 강남점"
            imageUrl="/climbing/theclimb_gangnam.png"
            subTitle="주소: 서울특별시 강남구 테헤란로8길 21 지하 1층"
          />

          <ClimbingCard
            title="더클라임 성수점"
            imageUrl="/climbing/theclimb_sungsu.jpg"
            subTitle="주소 : 서울특별시 성동구 아차산로17길 49 지하 1층"
          />
        </div>
      </div>
    </div>
  );
};

export default ClimbingPage;
