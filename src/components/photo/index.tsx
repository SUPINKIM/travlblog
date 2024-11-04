import { cn } from "@/lib/utils";
import { videos } from "./photo-cards/constant";

const Video = () => {
  return (
    <div className="w-full flex justify-center p-[16px]">
      <div className="bg-gray-800 w-full justify-center rounded-[8px] p-[16px] grid grid-cols-1">
        <div className="pt-[2px] pb-[12px] flex items-center gap-x-[6px]">
          {["bg-red-500", "bg-green-600", "bg-yellow-400"].map((color) => (
            <div
              key={color}
              className={cn("rounded-full size-[10px] shrink-0", color)}
            />
          ))}
        </div>
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full max-h-[680px]"
        >
          <source src={videos[0].src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
