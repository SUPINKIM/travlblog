import Navigator from "@/components/common/navigator";

const VideoLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-full bg-gray-950 text-white">
      <Navigator />
      {children}
    </div>
  );
};

export default VideoLayout;
