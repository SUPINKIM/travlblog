import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { PostArticle } from "@/components/blog/post-article";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  if (post.category === "essay") {
    return {
      title: post.title,
      alternates: { canonical: `/essay/${slug}` },
    };
  }

  return {
    title: `${post.title} | Supin's log`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${slug}`,
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  if (post.category === "essay") {
    redirect(`/essay/${slug}`);
  }

  return <PostArticle post={post} backHref="/blog" backLabel="글 목록으로" />;
}
