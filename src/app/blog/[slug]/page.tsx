import { ArrowLeft, Calendar, ExternalLink, Tag } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MdxRenderer } from "@/components/blog/mdx-renderer";
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

  return {
    title: `${post.title} | Supin's log`,
    description: post.summary,
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

const CATEGORY_COLORS: Record<string, string> = {
  dev: "bg-brand-cyan/10 text-brand-cyan",
  algorithm: "bg-brand-violet/10 text-brand-violet",
  essay: "bg-brand-amber/10 text-brand-amber",
  conference: "bg-brand-rose/10 text-brand-rose",
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        목록으로
      </Link>

      {/* Header */}
      <header className="mb-10">
        {/* Category */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded ${CATEGORY_COLORS[post.category] || "bg-surface-3 text-muted-foreground"}`}
          >
            {post.category.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {post.originalUrl && (
            <a
              href={post.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-brand-cyan transition-colors"
            >
              <ExternalLink size={12} />
              Velog 원본
            </a>
          )}
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap">
            <Tag size={12} className="text-muted-foreground" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded bg-surface-3 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Thumbnail */}
        {post.thumbnail && (
          <div className="mt-6 rounded-xl overflow-hidden border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose-custom">
        <MdxRenderer source={post.content} />
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:text-brand-cyan/80 transition-colors font-medium"
        >
          <ArrowLeft size={16} />
          다른 글 보러가기
        </Link>
      </footer>
    </article>
  );
}
