"use client";

import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ImageCarouselItem from "./image-carousel-item";
import ImageCarouselProvider from "./provider";

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
    <ImageCarouselProvider>
      <div className="select-none">
        <Carousel
          className="py-[24px] w-full relative z-0"
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
          <CarouselPrevious className="left-[-2px] z-10" variant="secondary" />
          <CarouselNext className="right-[-16px] z-10" variant="secondary" />
          <CarouselContent className="-ml-2">
            {images.map(({ imageUrl, alt, blurDataURL }) => (
              <CarouselItem
                key={alt}
                className="flex items-center h-fit justify-center basis-auto"
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
    </ImageCarouselProvider>
  );
};

export default ImageCarousel;
