"use client";

import { motion } from "framer-motion";

import { ActivityHeatmap } from "@/components/blog/activity-heatmap";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export function ActivitySection({
  activityMap,
  currentYear,
}: {
  activityMap: Record<string, number>;
  currentYear: number;
}) {
  return (
    <section className="bg-background px-6 py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <p className="mb-3 font-mono text-xs font-semibold tracking-[0.22em] text-brand-cyan">
            05 / ACTIVITY
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">글쓰기 기록</h2>
          <p className="text-muted-foreground">
            꾸준히 기록하고, 꾸준히 성장하기.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <ActivityHeatmap
            activityMap={activityMap}
            currentYear={currentYear}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
