"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  MapPin,
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
  currentYear: number;
}

const SIDE_PROJECTS = PROJECTS.filter((project) => project.type === "side");
const WORK_PROJECTS = PROJECTS.filter((project) => project.type === "work");

const HERO_POSTCARDS = [
  {
    image: "/japan/japan1.png",
    label: "KYOTO / 2025",
    note: "35.0116° N",
    className:
      "left-0 top-16 w-[55%] -rotate-[5deg] md:left-4 md:top-20 md:w-[52%]",
    preload: true,
  },
  {
    image: "/australia/opera_house.png",
    label: "SYDNEY / 2024",
    note: "151.2153° E",
    className:
      "right-1 top-2 w-[42%] rotate-[7deg] md:right-4 md:top-4 md:w-[40%]",
    preload: false,
  },
  {
    image: "/paris/paris1.png",
    label: "PARIS / 2023",
    note: "48.8566° N",
    className:
      "bottom-5 right-0 w-[49%] rotate-[3deg] md:bottom-10 md:right-5 md:w-[46%]",
    preload: false,
  },
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-mono text-xs font-semibold tracking-[0.22em] text-brand-cyan">
      {children}
    </p>
  );
}

function HeroCollage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.75, delay: 0.15 }}
      className="relative mx-auto min-h-[430px] w-full max-w-[570px] md:min-h-[540px]"
      aria-label="여행 사진과 프로필로 구성한 여행 지도 콜라주"
    >
      <div className="home-map-grid absolute inset-3 rounded-[2rem] border border-brand-cyan/10" />

      <svg
        viewBox="0 0 560 500"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <path
          d="M58 337 C132 262 114 126 250 142 C358 154 322 314 492 260"
          fill="none"
          stroke="hsl(var(--brand-cyan))"
          strokeOpacity="0.58"
          strokeWidth="2"
          strokeDasharray="8 10"
        />
        <circle cx="58" cy="337" r="5" fill="hsl(var(--brand-amber))" />
        <circle cx="250" cy="142" r="5" fill="hsl(var(--brand-cyan))" />
        <circle cx="492" cy="260" r="5" fill="hsl(var(--brand-rose))" />
      </svg>

      {HERO_POSTCARDS.map((card) => (
        <div
          key={card.label}
          className={`group absolute z-10 rounded-sm border-[7px] border-[#e8e4dc] bg-[#e8e4dc] shadow-2xl shadow-black/40 ${card.className}`}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-surface-3">
            <Image
              src={card.image}
              alt={`${card.label} 여행 사진`}
              fill
              preload={card.preload}
              sizes="(max-width: 768px) 55vw, 300px"
              className="object-cover saturate-[0.85] transition duration-700 group-hover:scale-105 group-hover:saturate-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
          <div className="flex items-center justify-between bg-[#e8e4dc] px-1 pt-2 font-mono text-[8px] font-bold tracking-[0.12em] text-[#141b2a] md:text-[9px]">
            <span>{card.label}</span>
            <span className="opacity-55">{card.note}</span>
          </div>
        </div>
      ))}

      <div className="absolute bottom-[104px] left-[7%] z-20 hidden -rotate-3 rounded-sm border border-brand-amber/30 bg-[#171a24]/95 p-3 font-mono text-[9px] leading-5 text-muted-foreground shadow-xl sm:block md:left-[3%]">
        <span className="text-brand-rose">const</span>{" "}
        <span className="text-brand-cyan">nextStop</span> =
        <br />
        <span className="text-brand-amber">&quot;somewhere new&quot;</span>;
      </div>

      <div className="absolute left-[43%] top-[46%] z-30 -translate-x-1/2 -translate-y-1/2">
        <div className="home-profile-stamp relative grid h-32 w-32 place-items-center rounded-full bg-[#dbeff1] shadow-2xl shadow-black/50 md:h-40 md:w-40">
          <div className="absolute inset-1 overflow-hidden rounded-full bg-[#eef0ef]">
            <Image
              src="/profile-2026.png"
              alt="김수빈 프로필"
              fill
              sizes="(max-width: 768px) 120px, 152px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-brand-cyan/35 bg-background/95 px-3 py-1 font-mono text-[9px] font-bold tracking-[0.16em] text-brand-cyan shadow-lg">
            SUPIN · SEOUL
          </div>
        </div>
      </div>

      <div className="absolute right-[3%] top-[49%] z-20 rotate-6 rounded-full border-2 border-brand-rose/70 px-4 py-3 text-center font-mono text-[8px] font-bold tracking-[0.15em] text-brand-rose md:right-[8%]">
        BUILD
        <br />
        WANDER
        <br />
        WRITE
      </div>

      <div className="absolute bottom-1 left-[35%] z-20 -rotate-2 bg-brand-amber px-3 py-1 font-mono text-[9px] font-black tracking-[0.12em] text-[#17120b] shadow-lg">
        FIELD NOTE № 021
      </div>
    </motion.div>
  );
}

export default function HomePage({
  recentPosts = [],
  activityMap = {},
  currentYear,
}: HomePageProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <section className="relative border-b border-border/70 px-6 pb-16 pt-5 md:pb-24">
        <div className="home-hero-glow absolute inset-0" />

        <header className="relative z-40 mx-auto flex max-w-6xl items-center justify-between border-b border-border/70 pb-5">
          <Link href="/" className="flex items-center gap-1.5" aria-label="홈으로">
            <span className="text-sm font-black tracking-tight">supin</span>
            <span className="font-pixel text-[7px] text-brand-cyan">.log</span>
          </Link>

          <nav aria-label="홈 섹션" className="flex items-center gap-4 sm:gap-7">
            {[
              ["NOTES", "#notes"],
              ["WORK", "#work"],
              ["PLACES", "#places"],
              ["ABOUT", "#about"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="font-mono text-[9px] font-semibold tracking-[0.15em] text-muted-foreground transition-colors hover:text-brand-cyan sm:text-[10px]"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-86px)] max-w-6xl items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:py-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-20"
          >
            <motion.div variants={fadeInUp} className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-cyan" />
              <p className="font-mono text-[10px] font-bold tracking-[0.24em] text-brand-cyan sm:text-xs">
                ROUTES &amp; RENDERS
              </p>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="max-w-[680px] text-[clamp(2.65rem,8.8vw,5.7rem)] font-black leading-[1.04] tracking-[-0.055em] text-foreground lg:text-[clamp(3.8rem,5.6vw,5.7rem)]"
            >
              화면을 만들고,
              <br />
              세계를 돌아다니며,
              <br />
              <span className="relative inline-block text-brand-amber">
                둘 다 기록합니다.
                <svg
                  viewBox="0 0 520 18"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand-rose"
                >
                  <path
                    d="M3 12 C104 3 176 18 268 9 C356 1 431 15 517 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-9 max-w-xl text-base leading-7 text-muted-foreground md:text-lg"
            >
              프론트엔드 엔지니어 김수빈의 디지털 필드 저널.
              <br className="hidden sm:block" />
              코드에서 배운 것과 길 위에서 만난 장면을 오래 남깁니다.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#notes"
                className="inline-flex items-center gap-2 rounded-sm bg-brand-cyan px-5 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105"
              >
                최근 글 읽기
                <ArrowDownRight size={16} />
              </a>
              <a
                href="#places"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface-2/70 px-5 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-brand-amber/60"
              >
                지도 펼치기
                <MapPin size={15} />
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              <span>Frontend Engineer</span>
              <span className="text-brand-rose">✦</span>
              <span>Writer</span>
              <span className="text-brand-rose">✦</span>
              <span>Traveler</span>
            </motion.div>
          </motion.div>

          <HeroCollage />
        </div>
      </section>

      {recentPosts.length > 0 && <RecentPosts posts={recentPosts} />}

      <section id="work" className="scroll-mt-6 border-y border-border/70 bg-surface-1 px-6 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="mb-12 md:flex md:items-end md:justify-between">
            <div>
              <SectionLabel>02 / BUILT</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">아이디어를 제품으로</h2>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground md:mt-0">
              회사에서 만든 서비스와, 필요해서 직접 시작하고 끝까지 배포한 프로젝트입니다.
            </p>
          </motion.div>

          <div className="grid items-start gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid h-fit self-start items-start gap-4 sm:grid-cols-2">
              {SIDE_PROJECTS.map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group relative h-fit overflow-hidden rounded-2xl border border-brand-cyan/20 bg-background p-6 transition-colors hover:border-brand-cyan/55"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-cyan/10 blur-3xl transition group-hover:bg-brand-cyan/20" />
                  <div className="relative flex items-start justify-between gap-3">
                    <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-brand-cyan">
                      SIDE PROJECT · {String(index + 1).padStart(2, "0")}
                    </span>
                    <ExternalLink size={15} className="text-muted-foreground transition group-hover:text-brand-cyan" />
                  </div>
                  <div className="relative mt-8">
                    <h3 className="mb-3 text-2xl font-black leading-tight">{project.name}</h3>
                    <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{project.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[9px] font-semibold text-brand-amber">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="rounded-2xl border border-border bg-background p-6 md:p-7">
              <div className="mb-7 flex items-center justify-between">
                <p className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.14em] text-muted-foreground">
                  <Briefcase size={13} /> WORK LOG
                </p>
                <span className="font-mono text-[9px] tracking-[0.12em] text-muted-foreground">
                  ARCHIVE
                </span>
              </div>
              <div className="divide-y divide-border">
                {WORK_PROJECTS.map((project) => (
                  <div key={project.name} className="py-5 first:pt-0 last:pb-0">
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                      <h3 className="font-bold">{project.name}</h3>
                      <span className="font-mono text-[9px] text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-xs leading-5 text-muted-foreground">{project.desc}</p>
                    <p className="mt-2 font-mono text-[9px] text-brand-cyan/80">{project.tags.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="places" className="scroll-mt-6 px-6 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="mb-12 md:flex md:items-end md:justify-between">
            <div>
              <SectionLabel>03 / PLACES</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">길 위에서 수집한 장면</h2>
            </div>
            <Link
              href="/travel"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-amber transition hover:gap-3 md:mt-0"
            >
              모든 여행 기록
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {TRAVEL_DESTINATIONS.map((destination, index) => (
              <motion.div
                key={destination.country}
                variants={fadeInUp}
                className={`group relative overflow-hidden rounded-xl border border-border bg-surface-2 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "aspect-[16/9] md:h-full" : "aspect-[4/3]"}`}>
                  <Image
                    src={destination.image}
                    alt={`${destination.country} 여행 사진`}
                    fill
                    sizes={index === 0 ? "(max-width: 768px) 50vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                    className="object-cover saturate-[0.78] transition duration-700 group-hover:scale-105 group-hover:saturate-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                    <div>
                      <p className="mb-1 font-mono text-[8px] tracking-[0.16em] text-white/55">PLACE {String(index + 1).padStart(2, "0")}</p>
                      <p className="text-sm font-bold text-white md:text-base">{destination.emoji} {destination.country}</p>
                    </div>
                    <MapPin size={15} className="text-brand-amber" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="about" className="scroll-mt-6 border-y border-border/70 bg-surface-1 px-6 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>04 / ABOUT</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              재미있는 경험을
              <br />
              오래 만드는 사람
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-lg leading-8 text-muted-foreground">
              프론트엔드 개발자로 소셜 커머스, 게임형 서비스, B2B 커머스 등 다양한 제품을 만들어 왔습니다.
              이제 <strong className="font-bold text-foreground">새로운 팀에서 다음 챕터</strong>를 시작할 준비를 하고 있어요.
              제품의 아이디어가 화면의 작은 움직임으로 이어지고, 그 경험이 누군가의 일상에 남는 순간을 좋아합니다.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold">
                  <Briefcase size={16} className="text-brand-cyan" /> 새로운 팀 · 다음 챕터
                </div>
                <p className="font-mono text-[10px] text-muted-foreground">FRONTEND DEVELOPER / STARTING SOON</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold">
                  <Code2 size={16} className="text-brand-amber" /> TOOLKIT
                </div>
                <p className="font-mono text-[10px] leading-5 text-muted-foreground">{SKILLS.join(" · ")}</p>
              </div>
            </div>

            <a
              href="https://github.com/SUPINKIM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-cyan transition hover:gap-3"
            >
              <Github size={16} /> GitHub에서 코드 보기 <ArrowRight size={15} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {Object.keys(activityMap).length > 0 && (
        <ActivitySection activityMap={activityMap} currentYear={currentYear} />
      )}

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black">supin</span>
              <span className="font-pixel text-[7px] text-brand-cyan">.log</span>
            </div>
            <p className="mt-2 font-mono text-[9px] tracking-[0.12em] text-muted-foreground">BUILD · WANDER · WRITE</p>
          </div>

          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9px] font-semibold tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          <p className="font-mono text-[9px] text-muted-foreground">© {new Date().getFullYear()} SUPIN KIM</p>
        </div>
      </footer>
    </div>
  );
}
