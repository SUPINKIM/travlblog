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
        <PostCard
          key={id}
          id={id}
          imageUrl={imageUrl}
          title={title}
          subTitle={subTitle}
        />
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
