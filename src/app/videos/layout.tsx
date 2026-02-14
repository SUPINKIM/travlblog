import Navigator from "@/components/common/navigator";

const VideoLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full min-h-screen">
      <Navigator />
      {children}
    </div>
  );
};

export default VideoLayout;
