import Navigator from "@/components/common/navigator";
import { Toaster } from "@/components/ui/toaster";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigator />
      <div className="max-w-4xl mx-auto px-6 py-8">{children}</div>
      <Toaster />
    </>
  );
}
