import Link from "next/link";

import { getListByCountry } from "@/apis/countries/get";

import PostCard from "./card";

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
            <PostCard title={post.title} />
          </Link>
        ))}
        {/* <Link href="posts/3" className="w-fit"></Link> */}
      </div>
    </div>
  );
};

export default NewPosts;
