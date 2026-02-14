import Buttons from "./buttons";
import { videos } from "./constant";

const Video = () => {
  return (
    <div className="bg-surface-2 max-w-[1000px] min-w-[360px] rounded-xl border border-border px-6 pt-4 pb-8 grid grid-cols-1 mx-auto">
      <div className="pb-4 flex items-center gap-x-2">
        <Buttons />
      </div>
      <video autoPlay muted loop className="object-cover w-full rounded-lg">
        <source src={videos[0].src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
