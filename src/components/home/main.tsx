"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  MapPin,
  Plane,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ActivitySection } from "@/components/home/activity-section";
import { RecentPosts } from "@/components/home/recent-posts";
import {
  PROJECTS,
  SKILLS,
  SOCIAL_LINKS,
  TRAVEL_DESTINATIONS,
} from "@/constant/home-data";
import type { PostMeta } from "@/lib/constants";

interface HomePageProps {
  recentPosts?: PostMeta[];
  activityMap?: Record<string, number>;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage({ recentPosts = [], activityMap = {} }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface-2" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-violet/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* 프로필 이미지 */}
            <div className="relative inline-block mb-8">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-border ring-offset-4 ring-offset-background mx-auto">
                <Image
                  src="/profile.png"
                  alt="Supin"
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
            </div>

            {/* 인사 */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm mb-3 tracking-wide"
            >
              Frontend Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
            >
              <span className="text-gradient">Kim Supin</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
            >
              코드로 재미있는 경험을 만들고,
              <br />
              여행하며 보고 느낀 것들을 기록합니다.
            </motion.p>

            {/* CTA 버튼들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3 flex-wrap"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <BookOpen size={16} />
                Blog
              </Link>
              <Link
                href="/travel"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors"
              >
                <Plane size={16} />
                Travel
              </Link>
              <a
                href="https://github.com/SUPINKIM"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-2 border border-border text-foreground rounded-lg font-medium text-sm hover:bg-surface-3 transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>

            {/* 스크롤 힌트 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1 mx-auto"
              >
                <motion.div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-brand-cyan text-sm font-medium mb-2 tracking-wide">
              ABOUT
            </p>
            <h2 className="text-3xl font-bold mb-6">
              안녕하세요, <span className="text-gradient">수빈</span>입니다
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              5년차 프론트엔드 개발자로, 현재{" "}
              <span className="text-foreground font-medium">Levit</span>에서{" "}
              <span className="text-foreground font-medium">Alwayz 앱</span>과
              농장 시뮬레이션 게임{" "}
              <span className="text-foreground font-medium">올팜</span>을
              개발하고 있어요. 사용자에게 즐거운 경험을 전달하는 서비스를 만드는
              걸 좋아합니다.
            </p>
          </motion.div>

          {/* 현재 직장 */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 mb-10 p-4 rounded-xl bg-surface-2 border border-border w-fit"
          >
            <Briefcase size={18} className="text-brand-cyan" />
            <div>
              <p className="text-sm font-medium">Levit - Alwayz</p>
              <p className="text-xs text-muted-foreground">
                Frontend Developer / 2021 ~
              </p>
            </div>
            <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse ml-2" />
          </motion.div>

          {/* Skills */}
          <motion.div variants={fadeInUp}>
            <p className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
              <Code2 size={14} />
              TECH STACK
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-surface-3 text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-surface-1">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-brand-violet text-sm font-medium mb-2 tracking-wide">
              PROJECTS
            </p>
            <h2 className="text-3xl font-bold">만들어온 것들</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.name}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 rounded-xl bg-surface-2 border border-border hover:border-brand-violet/30 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  if (project.link === "#") return;
                  window.open(project.link);
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground group-hover:text-brand-violet transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-surface-3 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <ExternalLink
                      size={14}
                      className="text-muted-foreground group-hover:text-brand-violet transition-colors"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Travel Destinations Section */}
      <section className="py-24 px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-brand-amber text-sm font-medium mb-2 tracking-wide">
              TRAVEL
            </p>
            <h2 className="text-3xl font-bold mb-4">
              여행하며 기록하는 순간들
            </h2>
            <p className="text-muted-foreground">
              지금까지 방문한 도시들. 각 여행의 이야기를 블로그에 담고 있어요.
            </p>
          </motion.div>

          {/* 여행지 그리드 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {TRAVEL_DESTINATIONS.map((dest) => (
              <motion.div
                key={dest.country}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative group rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={dest.image}
                  alt={dest.country}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-lg">{dest.emoji}</span>
                  <span className="text-white text-sm font-medium">
                    {dest.country}
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MapPin size={16} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Travel Blog CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <Link
              href="/travel"
              className="inline-flex items-center gap-2 text-sm text-brand-cyan hover:text-brand-cyan/80 transition-colors font-medium"
            >
              모든 여행 기록 보러가기
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Activity Heatmap Section */}
      {Object.keys(activityMap).length > 0 && (
        <ActivitySection activityMap={activityMap} />
      )}

      {/* Recent Posts Section */}
      {recentPosts.length > 0 && <RecentPosts posts={recentPosts} />}

      {/* Interests Section - 간결한 포인트 */}
      <section className="py-24 px-6 bg-surface-1">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-brand-rose text-sm font-medium mb-2 tracking-wide">
              BEYOND CODE
            </p>
            <h2 className="text-3xl font-bold">코딩 외의 이야기</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                emoji: "✈️",
                title: "여행",
                desc: "새로운 곳을 탐험하는 것",
                accent: "brand-cyan",
              },
              {
                emoji: "🧗",
                title: "클라이밍",
                desc: "한 발씩, 끝까지 오르기",
                accent: "brand-violet",
              },
              {
                emoji: "✍️",
                title: "글쓰기",
                desc: "생각을 글로 남기는 것",
                accent: "brand-amber",
              },
              {
                emoji: "📚",
                title: "책",
                desc: "틈틈이, 자주, 많이 읽기",
                accent: "brand-rose",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="p-5 rounded-xl bg-surface-2 border border-border text-center hover:border-border/80 transition-colors"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">supin</span>
            <span className="font-pixel text-[8px] text-brand-cyan">.log</span>
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">&copy; 2025 Supin Kim</p>
        </div>
      </footer>
    </div>
  );
}
