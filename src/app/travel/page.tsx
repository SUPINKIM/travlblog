import Navigator from "@/components/common/navigator";
import { CAROUSEL_ITEMS } from "@/components/travel/contents/image-carousel/constant";
import ImageCarousel from "@/components/travel/contents/image-carousel/image-carousel";
import NewPosts from "@/components/travel/contents/new-posts";
import Player from "@/components/travel/contents/player";
import TripPosts from "@/components/travel/contents/trip-posts";

export default async function Travel() {
  const newImages = [...CAROUSEL_ITEMS];

  return (
    <div className="min-h-screen">
      <Navigator />
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Travel Hero */}
        <div className="mb-10">
          <p className="text-brand-amber text-sm font-medium mb-2 tracking-wide">
            TRAVEL LOG
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            여행의 <span className="text-gradient">기록</span>
          </h1>
          <p className="text-muted-foreground max-w-lg">
            세계 곳곳을 여행하며 보고, 느끼고, 경험한 것들을 담은 공간입니다.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-y-8 w-full">
          <Player />
          <ImageCarousel images={newImages} />
          <NewPosts />
          <TripPosts />
        </div>
      </div>
    </div>
  );
}
