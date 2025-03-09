import { Link2Icon, VideoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import LinkButton from "@/components/common/link-button";
import { Button } from "@/components/ui/button";

import Visitor from "./visitor";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between flex-wrap gap-[8px]">
      <div className="flex items-center gap-x-[8px]">
        <Image src="/profile.png" alt="thumbnail" width={100} height={100} />
        <div className="flex flex-col gap-y-[6px]">
          <h1 className="font-semibold text-[22px]">
            {"Supin's trip blog 🛫"}
          </h1>
          <h6 className="text-gray-800 text-[14px]">여행순이의 여행 일기장</h6>
        </div>
      </div>
      <div className="flex items-center flex-wrap  gap-[8px]">
        <Visitor />
        <Link href="/videos">
          <Button variant="ghost" className="h-[42px] flex gap-x-[4px]">
            <VideoIcon width={18} height={18} />
            <span>시드니 영상</span>
          </Button>
        </Link>
        <LinkButton
          link="https://my.surfit.io/w/1555709893"
          label={
            <Button variant="ghost" className="flex gap-x-[4px] h-[42px]">
              <Link2Icon height={18} width={18} />
              <span>이력서</span>
            </Button>
          }
        />
        <Link href="/climbing">
          <Button variant="ghost" className="h-[42px]">
            🧗‍♀️ 클라이밍 리스트
          </Button>
        </Link>
      </div>
      {/* <Link href="/write">
        <Button>새 글 작성하기</Button>
      </Link> */}
    </div>
  );
};

export default Header;
