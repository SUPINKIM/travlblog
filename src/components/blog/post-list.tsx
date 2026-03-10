import { Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { PostMeta } from "@/lib/constants";

const CATEGORY_COLORS: Record<string, string> = {
  dev: "bg-brand-cyan/10 text-brand-cyan",
  algorithm: "bg-brand-violet/10 text-brand-violet",
  essay: "bg-brand-amber/10 text-brand-amber",
  conference: "bg-brand-rose/10 text-brand-rose",
};

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground text-sm">
          아직 작성된 글이 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group block p-5 rounded-xl bg-surface-2 border border-border hover:border-brand-cyan/30 transition-all duration-300"
        >
          <div className="flex gap-5">
            {/* Thumbnail */}
            {post.thumbnail && (
              <div className="hidden sm:block shrink-0 w-[140px] h-[90px] rounded-lg overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            )}

            <div className="flex-1 min-w-0">
              {/* Category badge */}
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded ${CATEGORY_COLORS[post.category] || "bg-surface-3 text-muted-foreground"}`}
                >
                  {post.category.toUpperCase()}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-base font-semibold text-foreground group-hover:text-brand-cyan transition-colors line-clamp-1 mb-1.5">
                {post.title}
              </h2>

              {/* Summary */}
              <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                {post.summary}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={11} />
                  {new Date(post.date).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                {post.tags.length > 0 && (
                  <span className="flex items-center gap-1">
                    <Tag size={11} />
                    {post.tags.slice(0, 3).join(", ")}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
