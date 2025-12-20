"use client";

import { motion } from "framer-motion";

import { PixelIcon, ScrollSection } from "@/components/home";
import { PROJECTS, SECTION_ICONS } from "@/constant/home-data";

export function ProjectsSection() {
  return (
    <ScrollSection className="min-h-screen p-8 md:p-16 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-xl text-pink-400 mb-8 flex items-center gap-3">
          <PixelIcon name={SECTION_ICONS.projects} size="lg" />
          PROJECTS
          <span className="text-xs text-slate-500 ml-2">
            ({PROJECTS.length})
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="border-4 border-pink-400 bg-slate-800 p-6 shadow-[8px_8px_0_#ec4899] cursor-pointer hover:bg-slate-700 transition-colors relative group"
              onClick={() => {
                if (project.link === "#") return;
                window.open(project.link);
              }}
            >
              {/* 호버 시 깜빡이는 효과 */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <PixelIcon
                    name="cursor"
                    size="sm"
                    className="text-yellow-400"
                  />
                </motion.div>
              </div>

              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-slate-700 border-2 border-pink-300 flex items-center justify-center">
                  <PixelIcon
                    name={project.icon}
                    size="lg"
                    className="text-pink-400"
                  />
                </div>
                <span className="text-xs text-slate-500 border border-slate-500 px-2 py-1 flex items-center gap-1">
                  <PixelIcon name="calendar" size="sm" />
                  {project.year}
                </span>
              </div>

              <h3 className="text-sm text-yellow-400 mb-2 flex items-center gap-2">
                <PixelIcon
                  name="chevron-right"
                  size="sm"
                  className="text-pink-400"
                />
                {project.name}
              </h3>
              <p className="text-xs text-slate-400">{project.desc}</p>

              {/* 하단 장식 */}
              <div className="mt-4 pt-3 border-t border-slate-700 flex justify-between items-center">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-400" />
                  <div className="w-2 h-2 bg-yellow-400" />
                  <div className="w-2 h-2 bg-red-400" />
                </div>
                <span className="text-[10px] text-slate-600 flex items-center gap-1">
                  <PixelIcon name="link" size="sm" />
                  VIEW MORE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
