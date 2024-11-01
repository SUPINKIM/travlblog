"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ImageCarouselItem from "./image-carousel-item";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

interface Image {
  imageUrl: string;
  alt: string;
  blurDataURL: string;
}

const ImageCarousel = ({ images }: { images: Array<Image> }) => {
  const [api, setAPi] = useState<CarouselApi>();

  const restartSlides = useCallback(() => {
    api?.plugins().autoplay.play();
  }, [api]);

  useEffect(() => {
    api?.containerNode().addEventListener("mouseleave", restartSlides);

    return () => {
      api?.containerNode().removeEventListener("mouseleave", restartSlides);
    };
  }, [api, restartSlides]);

  return (
    <div className="select-none">
      <Carousel
        className="py-[16px] border-b border-gray-200 w-full relative z-0"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnInteraction: true,
          }),
        ]}
        setApi={setAPi}
      >
        <CarouselPrevious className="left-[-2px] z-10" />
        <CarouselNext className="right-[-16px] z-10" />
        <CarouselContent className="-ml-2">
          {images.map(({ imageUrl, alt, blurDataURL }) => (
            <CarouselItem
              key={alt}
              className="flex items-center h-[320px] justify-center basis-auto"
            >
              <ImageCarouselItem
                imageUrl={imageUrl}
                alt={alt}
                base64Url={blurDataURL}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
