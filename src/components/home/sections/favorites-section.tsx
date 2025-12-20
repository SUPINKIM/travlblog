"use client";

import { motion } from "framer-motion";

import { PixelIcon, ScrollSection } from "@/components/home";
import { FAVORITES, SECTION_ICONS } from "@/constant/home-data";

export function FavoritesSection() {
  return (
    <ScrollSection className="min-h-screen p-8 md:p-16 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-xl text-yellow-400 mb-8 flex items-center gap-3">
          <PixelIcon name={SECTION_ICONS.favorites} size="lg" />
          FAVORITES
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FAVORITES.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                rotate: [0, -3, 3, 0],
                transition: { duration: 0.3 },
              }}
              className="border-4 border-yellow-400 bg-slate-800 p-6 text-center shadow-[6px_6px_0_#facc15] relative overflow-hidden group"
            >
              {/* 배경 패턴 */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #facc15 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />

              {/* 아이콘 */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="relative z-10 mb-4"
              >
                <div className="w-16 h-16 mx-auto bg-slate-700 border-2 border-yellow-300 flex items-center justify-center">
                  <PixelIcon
                    name={item.icon}
                    size="xl"
                    className="text-yellow-400"
                  />
                </div>
              </motion.div>

              <h3 className="text-xs text-yellow-400 mb-1 relative z-10">
                {item.label}
              </h3>
              <p className="text-[10px] text-slate-500 relative z-10">
                {item.desc}
              </p>

              {/* 호버 시 반짝이 효과 */}
              <motion.div
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <PixelIcon
                  name="sparkles"
                  size="sm"
                  className="text-yellow-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 추가 장식 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-800/50 border-2 border-dashed border-slate-600">
            <PixelIcon name="info" size="md" className="text-slate-500" />
            <span className="text-xs text-slate-500">
              이 외에도 많은 것들을 좋아해요!
            </span>
          </div>
        </motion.div>
      </div>
    </ScrollSection>
  );
}
