import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

const NewPosts = () => {
  return (
    <div className="pt-[6px] pb-[10px] grid grid-cols-1 gap-y-[16px]">
      <p className="font-medium text-[16px]">최신 포스트가 올라왔어요! ✍️</p>

      <div className="flex flex-wrap gap-[4px]">
        <Link href="posts/3" className="w-fit">
          <Card className="h-[52px] w-[160px] py-[12px]">
            <CardContent className="flex gap-x-[8px] flex-wrap items-center justify-center shrink-0 h-full">
              <div className="flex items-center justify-center size-[14px] rounded-full text-[10px] bg-red-500 text-white">
                N
              </div>
              <p>호주에 가다1</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default NewPosts;
