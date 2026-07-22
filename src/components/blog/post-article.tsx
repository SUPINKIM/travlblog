import { ArrowLeft, Calendar, ExternalLink, Tag } from "lucide-react";
import Link from "next/link";

import type { Post } from "@/lib/constants";

import { MdxRenderer } from "./mdx-renderer";

const CATEGORY_COLORS: Record<string, string> = {
  dev: "bg-brand-cyan/10 text-brand-cyan",
  algorithm: "bg-brand-violet/10 text-brand-violet",
  essay: "bg-brand-amber/10 text-brand-amber",
  conference: "bg-brand-rose/10 text-brand-rose",
};

function formatPostDate(date: string): string {
  const [year, month, day] = date.slice(0, 10).split("-").map(Number);
  return `${year}년 ${month}월 ${day}일`;
}

export function PostArticle({
  post,
  backHref,
  backLabel,
}: {
  post: Post;
  backHref: string;
  backLabel: string;
}) {
  return (
    <article className="max-w-3xl mx-auto">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        {backLabel}
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded ${CATEGORY_COLORS[post.category] || "bg-surface-3 text-muted-foreground"}`}
          >
            {post.category.toUpperCase()}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {formatPostDate(post.date)}
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

      <div className="prose-custom">
        <MdxRenderer source={post.content} />
      </div>

      <footer className="mt-16 pt-8 border-t border-border">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:text-brand-cyan/80 transition-colors font-medium"
        >
          <ArrowLeft size={16} />
          다른 글 보러가기
        </Link>
      </footer>
    </article>
  );
}
