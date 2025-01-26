import { readFile } from "node:fs/promises";
import path from "node:path";

import { getPlaiceholder } from "plaiceholder";

import { CAROUSEL_ITEMS } from "@/components/home/contents/image-carousel/constant";
import ImageCarousel from "@/components/home/contents/image-carousel/image-carousel";
import TripPosts from "@/components/home/contents/trip-posts";
import Header from "@/components/home/header";

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
      <div className="mt-[20px] grid grid-cols-1 gap-y-[12px] w-full">
        <ImageCarousel images={newImages} />
        <TripPosts />
        {/* <WorldMap /> */}
      </div>
    </div>
  );
}
