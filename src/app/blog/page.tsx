import { Suspense } from "react";

import { CategoryFilter } from "@/components/blog/category-filter";
import { PostList } from "@/components/blog/post-list";
import type { Category } from "@/lib/constants";
import { getAllPosts } from "@/lib/mdx";

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export const metadata = {
  title: "Blog | Supin's log",
  description: "개발, 알고리즘, 에세이, 컨퍼런스 기록",
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const validCategory =
    category && ["dev", "algorithm", "essay", "conference"].includes(category)
      ? (category as Category)
      : undefined;

  const posts = getAllPosts(validCategory);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <p className="text-brand-cyan text-sm font-medium mb-2 tracking-wide">
          BLOG
        </p>
        <h1 className="text-3xl font-bold mb-2">글 모음</h1>
        <p className="text-muted-foreground text-sm">
          개발하며 배운 것, 느낀 것, 다녀온 곳들의 기록.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <Suspense fallback={null}>
          <CategoryFilter />
        </Suspense>
      </div>

      {/* Post count */}
      <p className="text-xs text-muted-foreground mb-4">
        총 {posts.length}개의 글
      </p>

      {/* Post List */}
      <PostList posts={posts} />
    </div>
  );
}
