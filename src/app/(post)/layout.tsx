import Navigator from "@/components/common/navigator";
import { Toaster } from "@/components/ui/toaster";

const PostsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-full">
      {/* <div>포스팅 목록입니다.</div> */}
      <Navigator />
      <Toaster />
      {children}
    </div>
  );
};

export default PostsLayout;
