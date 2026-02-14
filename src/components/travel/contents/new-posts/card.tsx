"use client";

import { motion } from "framer-motion";
import { FC } from "react";

interface PostCardProps {
  title: string;
}

const PostCard: FC<PostCardProps> = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-2 border border-border hover:border-brand-cyan/30 transition-all cursor-pointer"
    >
      <div className="flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold bg-brand-rose text-white shrink-0">
        N
      </div>
      <p className="text-sm font-medium">{title}</p>
    </motion.div>
  );
};

export default PostCard;
