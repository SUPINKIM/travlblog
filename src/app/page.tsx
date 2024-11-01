import LinkButton from "@/components/common/link-button";
import Header from "@/components/home/header";
import TripPosts from "@/components/home/contents/trip-posts";
import ImageCarousel from "@/components/home/contents/image-carousel/image-carousel";

import { CAROUSEL_ITEMS } from "@/components/home/contents/image-carousel/constant";

import { readFile } from "node:fs/promises";
import path from "node:path";
import { getPlaiceholder } from "plaiceholder";
import WorldMap from "@/components/home/contents/map";

export default async function Home() {
  const newImages = [...CAROUSEL_ITEMS];

  const base64s = CAROUSEL_ITEMS.map(async (item) => {
    const buffer = await readFile(path.join("./public", item.imageUrl));

    const { base64 } = await getPlaiceholder(buffer, { size: 10 });
    return { ...item, blurDataURL: base64 };
  });

  const values = await Promise.all(base64s);

  values.forEach((value, idx) => {
    newImages[idx] = value;
  });

  return (
    <div className="w-full grid grid-cols-1 px-[16px] py-[32px]">
      <Header />
      <div className="mt-[12px] flex items-center gap-[12px] flex-wrap">
        <LinkButton
          link="https://cut-decade-d21.notion.site/6ad8b5d74c83429eaa1c5b45795c59f7?pvs=4"
          label="운영자는 누구인가? 🤔"
        />
      </div>
      <div className="mt-[20px] grid grid-cols-1 gap-y-[12px] w-full">
        <ImageCarousel images={newImages} />
        <TripPosts />
        <WorldMap />
      </div>
    </div>
  );
}
