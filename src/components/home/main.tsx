"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { PixelIcon } from "@/components/home";
import {
  AboutSection,
  FavoritesSection,
  HeroSection,
  ProjectsSection,
  TravelCTASection,
} from "@/components/home/sections";
import { SOCIAL_LINKS } from "@/constant/home-data";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="bg-slate-900 text-white font-pixel">
      {/* 스크롤 프로그레스 바 */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-2 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 z-50"
      />

      {/* 좌측 고정 소셜 링크 */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
        {SOCIAL_LINKS.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            whileHover={{ scale: 1.2, x: 4 }}
            className="w-10 h-10 bg-slate-800 border-2 border-slate-600 flex items-center justify-center hover:border-cyan-400 transition-colors"
            title={link.label}
          >
            <PixelIcon
              name={link.icon}
              size="md"
              className="text-slate-400 hover:text-cyan-400"
            />
          </motion.a>
        ))}
        <div className="w-px h-20 bg-slate-600 mx-auto" />
      </div>

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FavoritesSection />
      <TravelCTASection />

      {/* 푸터 */}
      <footer className="border-t-4 border-slate-700 p-8">
        <div className="max-w-4xl mx-auto">
          {/* 모바일 소셜 링크 */}
          <div className="flex justify-center gap-4 mb-6 md:hidden">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-10 h-10 bg-slate-800 border-2 border-slate-600 flex items-center justify-center hover:border-cyan-400 transition-colors"
              >
                <PixelIcon
                  name={link.icon}
                  size="md"
                  className="text-slate-400"
                />
              </a>
            ))}
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <PixelIcon name="heart" size="sm" className="text-pink-400" />
              <span className="text-xs text-slate-600">MADE WITH LOVE</span>
              <PixelIcon name="heart" size="sm" className="text-pink-400" />
            </div>
            <p className="text-xs text-slate-600">© 2025 SUBIN</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
