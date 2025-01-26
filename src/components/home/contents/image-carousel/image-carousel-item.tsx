"use client";

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
  // const { open } = useModal();

  // const handleClickImage = () => {
  //   open({
  //     showCloseButton: true,
  //     children: (
  //       // TODO : 모바일 접속 시에는 바텀으로 띄우기
  //       <div className="rounded-[8px] flex mx-[10px] bg-white items-center min-w-[320px] sm:w-[580px] h-fit sm:min-h-[400px]">
  //         <div className="overflow-hidden h-full items-center flex gap-x-[8px]">
  //           <Image
  //             className="rounded-[6px] size-[300px]"
  //             src={imageUrl}
  //             alt={alt}
  //             width={400}
  //             height={100}
  //             placeholder="blur"
  //             blurDataURL={base64Url}
  //           />
  //         </div>
  //       </div>
  //     ),
  //   });
  // };

  return (
    <div
      //onClick={handleClickImage}
      className="border h-[280px] cursor-pointer w-[320px] border-gray-100 relative rounded-[8px]"
    >
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
