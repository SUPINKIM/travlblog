import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostArticle } from "@/components/blog/post-article";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

interface EssayPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts("essay").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: EssayPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "essay") return { title: "Not Found" };

  return {
    title: `${post.title} | Supin's Essay`,
    description: post.summary,
    alternates: {
      canonical: `/essay/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      ...(post.thumbnail && { images: [{ url: post.thumbnail }] }),
    },
  };
}

export default async function EssayPostPage({ params }: EssayPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.category !== "essay") {
    notFound();
  }

  return (
    <PostArticle post={post} backHref="/essay" backLabel="에세이 목록으로" />
  );
}
