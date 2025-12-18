"use client";

import { motion } from "framer-motion";
import { FC } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface PostCardProps {
  title: string;
}

const PostCard: FC<PostCardProps> = ({ title }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Card className="flex items-center justify-center w-[160px] py-[12px]">
        <CardContent className="flex gap-x-[8px] flex-wrap items-center justify-center shrink-0 p-0 h-[48px]">
          <div className="flex items-center justify-center size-[14px] rounded-full text-[10px] bg-red-500 text-white">
            N
          </div>
          <p>{title}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PostCard;
