"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

import type { PostMeta } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const CATEGORY_COLORS: Record<string, string> = {
  dev: "bg-brand-cyan/10 text-brand-cyan",
  algorithm: "bg-brand-violet/10 text-brand-violet",
  essay: "bg-brand-amber/10 text-brand-amber",
  conference: "bg-brand-rose/10 text-brand-rose",
};

export function RecentPosts({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="py-24 px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="text-brand-emerald text-sm font-medium mb-2 tracking-wide">
            RECENT POSTS
          </p>
          <h2 className="text-3xl font-bold mb-4">최근 작성한 글</h2>
          <p className="text-muted-foreground">
            개발하며 배운 것, 느낀 것들의 기록.
          </p>
        </motion.div>

        <div className="space-y-3">
          {posts.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-surface-2 border border-border hover:border-brand-cyan/30 transition-all duration-300"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${CATEGORY_COLORS[post.category] || "bg-surface-3 text-muted-foreground"}`}
                    >
                      {post.category.toUpperCase()}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Calendar size={10} />
                      {new Date(post.date).toLocaleDateString("ko-KR", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground group-hover:text-brand-cyan transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                </div>
                <ArrowRight
                  size={14}
                  className="text-muted-foreground group-hover:text-brand-cyan transition-colors shrink-0"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-cyan hover:text-brand-cyan/80 transition-colors font-medium"
          >
            모든 글 보러가기
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
