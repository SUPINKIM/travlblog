"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { PixelIcon, ScrollSection } from "@/components/home";
import { BG_ICONS, SECTION_ICONS } from "@/constant/home-data";

// 고정된 위치 배열
const ICON_POSITIONS = [
  { top: 10, left: 5 },
  { top: 25, left: 85 },
  { top: 40, left: 15 },
  { top: 55, left: 75 },
  { top: 70, left: 25 },
  { top: 15, left: 45 },
  { top: 35, left: 65 },
  { top: 60, left: 35 },
  { top: 80, left: 55 },
  { top: 5, left: 70 },
  { top: 45, left: 90 },
  { top: 65, left: 10 },
  { top: 85, left: 80 },
  { top: 20, left: 30 },
  { top: 50, left: 50 },
];

export function TravelCTASection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ScrollSection className="min-h-screen p-8 md:p-16 flex items-center justify-center relative overflow-hidden">
      {/* 배경 아이콘 - 클라이언트에서만 렌더링 */}
      {isMounted &&
        ICON_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            animate={{
              x: [0, (i % 2 === 0 ? 1 : -1) * 20],
              y: [0, (i % 3 === 0 ? 1 : -1) * 20],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute pointer-events-none"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
            }}
          >
            <PixelIcon
              name={BG_ICONS[i % BG_ICONS.length]}
              size="lg"
              className="text-cyan-400/40"
            />
          </motion.div>
        ))}

      <div className="text-center z-10">
        {/* 메인 아이콘 */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-slate-800 border-4 border-cyan-400 shadow-[8px_8px_0_#06b6d4] flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <PixelIcon
                name="globe"
                size="xl"
                className="text-cyan-400 text-6xl"
              />
            </motion.div>
          </div>
        </motion.div>

        <h2 className="text-xl md:text-2xl text-cyan-400 mb-4 flex items-center justify-center gap-3">
          <PixelIcon name={SECTION_ICONS.travel} size="lg" />
          TRAVEL BLOG
          <PixelIcon name={SECTION_ICONS.travel} size="lg" />
        </h2>
        <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto">
          여행하며 보고 느낀 것들을
          <br />
          기록하고 있어요
        </p>

        {/* CTA 버튼 */}
        <Link href="/travel">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="px-8 py-4 bg-cyan-400 text-slate-900 text-sm font-bold border-4 border-cyan-300 shadow-[8px_8px_0_#0e7490] hover:bg-cyan-300 transition-colors flex items-center gap-3 mx-auto"
          >
            <PixelIcon name="play" size="md" className="text-slate-900" />
            START JOURNEY
            <PixelIcon
              name="arrow-right"
              size="md"
              className="text-slate-900"
            />
          </motion.button>
        </Link>

        <motion.p
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-8 text-xs text-slate-600 flex items-center justify-center gap-2"
        >
          <PixelIcon name="mouse" size="sm" />
          CLICK TO CONTINUE
        </motion.p>

        {/* 데코 라인 */}
        <div className="mt-12 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-3 h-3 bg-cyan-400"
            />
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
