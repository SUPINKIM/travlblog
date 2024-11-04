import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Navigator = () => {
  return (
    <div className="w-full z-10 sticky top-0 flex items-center justify-between p-[16px] bg-inherit">
      <Link href="/" className="flex items-center gap-x-[6px]">
        <div className="border border-gray-200 shadow-md rounded-full size-fit cursor-pointer">
          <Image src="/profile.png" alt="thumbnail" width={50} height={50} />
        </div>
        <span className="text-inherit">{"supin'log"}</span>
      </Link>
    </div>
  );
};

export default Navigator;
