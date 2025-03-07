import Link from "next/link";

import { getListByCountry } from "@/apis/countries/get";
import { Card, CardContent } from "@/components/ui/card";

const NewPosts = async () => {
  let posts: any[] = [];

  const getPostLists = async () => {
    const res = await getListByCountry({ country: "australia" });
    posts = [...res];
  };

  await getPostLists();

  return (
    <div className="pt-[6px] pb-[10px] grid grid-cols-1 gap-y-[16px]">
      <p className="font-medium text-[16px]">최신 포스트가 올라왔어요! ✍️</p>

      <div className="flex flex-wrap gap-[12px]">
        {posts.map((post) => (
          <Link key={post.id} href={`posts/${post.id}`} className="w-fit">
            <Card className="flex items-center justify-center w-[160px] py-[12px]">
              <CardContent className="flex gap-x-[8px] flex-wrap items-center justify-center shrink-0 p-0 h-[48px]">
                <div className="flex items-center justify-center size-[14px] rounded-full text-[10px] bg-red-500 text-white">
                  N
                </div>
                <p>{post.title}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
        {/* <Link href="posts/3" className="w-fit"></Link> */}
      </div>
    </div>
  );
};

export default NewPosts;
