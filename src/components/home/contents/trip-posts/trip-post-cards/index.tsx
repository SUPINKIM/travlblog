"use client";

import { motion } from "framer-motion";
import { FC } from "react";

import Empty from "@/components/common/empty";
import PostCard from "@/components/common/post-card";
import { Card, CardContent } from "@/components/ui/card";
import { ListByCountries } from "@/pages/api/list_by_countries/types";

interface TripPostCardsProps {
  list: Array<ListByCountries>;
}

const TripPostCards: FC<TripPostCardsProps> = ({ list }) => {
  return (
    <>
      {list.map(({ id, imageUrl, title, subTitle }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <PostCard
            id={id}
            imageUrl={imageUrl}
            title={title}
            subTitle={subTitle}
          />
        </motion.div>
      ))}
      {!list.length && (
        <Card className="h-[270px] border-none w-full flex items-center justify-center text-center">
          <CardContent className="p-0">
            <Empty />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default TripPostCards;
