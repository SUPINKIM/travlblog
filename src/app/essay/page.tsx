import type { Metadata } from "next";

import { PostList } from "@/components/blog/post-list";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Essay | Supin's log",
  description: "일과 삶 사이에서 발견한 마음과 생각을 기록합니다.",
  alternates: {
    canonical: "/essay",
  },
};

export default function EssayPage() {
  const posts = getAllPosts("essay");

  return (
    <div>
      <section className="mb-10">
        <p className="text-brand-amber text-sm font-medium mb-2 tracking-wide">
          ESSAY
        </p>
        <h1 className="text-2xl font-bold mb-3">
          부정적 사고 가운데 사랑과 희망, 감사라는 진부한 관념을 노래하다.
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          일과 삶 사이에서 발견한 마음, 사람, 선택에 관해 씁니다.
          <br />
          흘려보내고 싶지 않은 생각을 천천히 문장으로 남깁니다.
        </p>
      </section>

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">모든 에세이</h2>
        <p className="text-xs text-muted-foreground">총 {posts.length}개의 글</p>
      </div>

      <PostList posts={posts} />
    </div>
  );
}
