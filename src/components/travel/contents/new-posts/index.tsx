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
    <div className="py-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-rose animate-pulse" />
        <h2 className="text-lg font-semibold">Latest Posts</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {posts.map((post) => (
          <Link key={post.id} href={`posts/${post.id}`} className="w-fit">
            <PostCard title={post.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewPosts;
