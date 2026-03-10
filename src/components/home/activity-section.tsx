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
}: {
  activityMap: Record<string, number>;
}) {
  return (
    <section className="py-24 px-6 bg-surface-1">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <p className="text-brand-cyan text-sm font-medium mb-2 tracking-wide">
            ACTIVITY
          </p>
          <h2 className="text-3xl font-bold mb-4">글쓰기 기록</h2>
          <p className="text-muted-foreground">
            꾸준히 기록하고, 꾸준히 성장하기.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <ActivityHeatmap activityMap={activityMap} />
        </motion.div>
      </motion.div>
    </section>
  );
}
