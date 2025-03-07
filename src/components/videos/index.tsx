import Buttons from "./buttons";
import { videos } from "./constant";

const Video = () => {
  return (
    <div className="bg-gray-800 max-w-[1000px] min-w-[360px] rounded-[8px] px-[24px] pt-[16px] pb-[32px] grid grid-cols-1 mx-auto">
      <div className="pb-[16px] flex items-center gap-x-[6px]">
        <Buttons />
      </div>
      <video autoPlay muted loop className="object-cover w-full">
        <source src={videos[0].src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
