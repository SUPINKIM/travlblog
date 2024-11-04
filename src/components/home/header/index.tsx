import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "@radix-ui/react-icons";

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
      <Link href="/photo">
        <Button variant="ghost" className="w-[76px]">
          <ImageIcon />
        </Button>
      </Link>
      {/* <Link href="/write">
        <Button>새 글 작성하기</Button>
      </Link> */}
    </div>
  );
};

export default Header;
