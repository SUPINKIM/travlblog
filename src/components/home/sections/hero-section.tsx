"use client";

import { motion } from "framer-motion";

import {
  FloatingElements,
  PixelAvatar,
  PixelIcon,
  PixelTyping,
} from "@/components/home";

const FLOATING_HERO_ICONS = [
  { icon: "star", position: { top: "5rem", left: "5rem" }, duration: 3 },
  { icon: "startups", position: { top: "10rem", right: "8rem" }, duration: 2.5, direction: "down" as const },
  { icon: "save", position: { bottom: "10rem", left: "8rem" }, duration: 2 },
  { icon: "heart", position: { top: "15rem", left: "20rem" }, duration: 2.8 },
  { icon: "comment-quote", position: { bottom: "15rem", right: "15rem" }, duration: 3.2, direction: "down" as const },
] as const;

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* 배경 그리드 */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 스캔라인 효과 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
        }}
      />

      <FloatingElements elements={FLOATING_HERO_ICONS} />

      {/* 메인 콘텐츠 */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <div className="flex justify-center mb-8">
          <PixelAvatar size="lg" />
        </div>

        {/* 레벨 뱃지 */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 border-2 border-pink-500 mb-6"
        >
          <PixelIcon name="trophy" size="sm" className="text-yellow-400" />
          <span className="text-xs text-pink-400">LV.99 DEVELOPER</span>
          <PixelIcon name="trophy" size="sm" className="text-yellow-400" />
        </motion.div>

        <h1 className="text-2xl md:text-4xl text-cyan-400 mb-4">
          <PixelTyping text="HELLO, WORLD!" />
        </h1>

        {/* 스탯 미니 바 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-center gap-4 text-xs"
        >
          <span className="flex items-center gap-1 text-red-400">
            <PixelIcon name="heart" size="sm" /> HP 100
          </span>
          <span className="flex items-center gap-1 text-blue-400">
            <PixelIcon name="zap" size="sm" /> MP 80
          </span>
          <span className="flex items-center gap-1 text-yellow-400">
            <PixelIcon name="star" size="sm" /> EXP 9999
          </span>
        </motion.div>
      </motion.div>

      {/* 스크롤 안내 */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <PixelIcon name="chevron-down" size="lg" className="text-slate-500" />
        <span className="text-xs text-slate-500">SCROLL DOWN</span>
      </motion.div>
    </section>
  );
}
