import Image from "next/image";
import { FC } from "react";

interface ImageCarouselItemProps {
  imageUrl: string;
  base64Url?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const ImageCarouselItem: FC<ImageCarouselItemProps> = ({
  imageUrl,
  base64Url,
  alt = imageUrl,
}) => {
  return (
    <div className="border h-[320px] w-[360px] border-gray-100 relative rounded-[8px]">
      <Image
        className="rounded-[8px]"
        src={imageUrl}
        alt={alt}
        fill
        sizes="auto"
        placeholder="blur"
        blurDataURL={base64Url}
      />
    </div>
  );
};

export default ImageCarouselItem;
