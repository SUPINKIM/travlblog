"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Calendar, Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { PROJECTS } from "@/constant/home-data";
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
  algorithm: "bg-brand-emerald/10 text-brand-emerald",
  essay: "bg-brand-amber/10 text-brand-amber",
  conference: "bg-brand-rose/10 text-brand-rose",
};

function TiltCard({ post, index }: { post: PostMeta; index: number }) {
  const [enableTilt, setEnableTilt] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const noHover = window.matchMedia("(hover: none)").matches;
    setEnableTilt(!reduce && !noHover);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardLink = (
    <Link
      href={`/blog/${post.slug}`}
      style={enableTilt ? { transformStyle: "preserve-3d" } : undefined}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface-2 transition-all duration-300 hover:border-brand-cyan/45"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--surface-3)),hsl(var(--background)))]">
            <div className="home-card-grid absolute inset-0" />
            <Code2 className="absolute bottom-4 right-4 text-brand-cyan/40" size={34} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 bg-background/85 px-2 py-1 font-mono text-[8px] font-bold tracking-[0.14em] text-muted-foreground backdrop-blur">
          NOTE {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <span
            className={`rounded px-1.5 py-0.5 font-mono text-[8px] font-semibold tracking-[0.1em] ${CATEGORY_COLORS[post.category] || "bg-surface-3 text-muted-foreground"}`}
          >
            {post.category.toUpperCase()}
          </span>
          <span className="flex items-center gap-1 font-mono text-[9px] text-muted-foreground">
            <Calendar size={10} />
            {post.date.replaceAll("-", ".")}
          </span>
        </div>
        <h3
          style={enableTilt ? { transform: "translateZ(20px)" } : undefined}
          className="line-clamp-2 text-lg font-black leading-snug text-foreground transition-colors group-hover:text-brand-cyan"
        >
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-xs leading-5 text-muted-foreground">
          {post.summary}
        </p>
        <span className="mt-auto flex items-center gap-2 pt-6 font-mono text-[9px] font-bold tracking-[0.1em] text-brand-cyan">
          READ NOTE <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );

  if (!enableTilt) return cardLink;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
      style={{ perspective: 900 }}
    >
      <motion.div
        className="h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {cardLink}
      </motion.div>
    </div>
  );
}

export function RecentPosts({ posts }: { posts: PostMeta[] }) {
  const nowProject = PROJECTS.find((project) => project.type === "side");

  return (
    <section id="notes" className="scroll-mt-6 px-6 py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-12 md:flex md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 font-mono text-xs font-semibold tracking-[0.22em] text-brand-cyan">
              01 / RECENT NOTES
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              최근에 남긴 기록
            </h2>
          </div>
          <Link
            href="/blog"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-cyan transition hover:gap-3 md:mt-0"
          >
            모든 글 보기
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))_0.84fr]">
          {posts.slice(0, 3).map((post, index) => (
            <motion.div key={post.slug} variants={fadeInUp} className="h-full">
              <TiltCard post={post} index={index} />
            </motion.div>
          ))}

          {nowProject && (
            <motion.a
              href={nowProject.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group relative flex min-h-72 flex-col overflow-hidden rounded-xl border border-brand-amber/35 bg-brand-amber/[0.06] p-5 transition hover:-translate-y-1 hover:border-brand-amber/70"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-amber/10 blur-3xl" />
              <div className="relative flex items-center justify-between">
                <p className="font-mono text-[9px] font-black tracking-[0.18em] text-brand-amber">
                  NOW BUILDING
                </p>
                <ExternalLink size={14} className="text-brand-amber" />
              </div>
              <div className="relative mt-auto">
                <div className="mb-5 font-mono text-4xl font-black text-brand-amber/35">
                  {"</>"}
                </div>
                <h3 className="text-xl font-black leading-tight">
                  {nowProject.name}
                </h3>
                <p className="mt-3 line-clamp-4 text-xs leading-5 text-muted-foreground">
                  {nowProject.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {nowProject.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[8px] font-semibold text-brand-amber">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          )}
        </div>

        <motion.p
          variants={fadeInUp}
          className="mt-7 max-w-xl text-sm leading-6 text-muted-foreground"
        >
          개발하며 배운 것, 제품을 만들며 고민한 것, 그리고 일상을 지나며 붙잡아 둔 생각들.
        </motion.p>
      </motion.div>
    </section>
  );
}
