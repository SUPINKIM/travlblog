import "./wanted-sans.css";
import "./globals.css";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import Error from "@/components/common/error";
import { VisitorProvider } from "@/hooks/visitor";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://travle-blog.vercel.app"
  ),
  title: "Supin's log",
  description:
    "Frontend Developer Supin Kim - Portfolio, Travel Blog & Life Log",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background font-sans text-foreground">
        <Error>
          <VisitorProvider>
            <main className="min-w-[320px] min-h-screen">{children}</main>
          </VisitorProvider>
        </Error>
        <Analytics />
      </body>
    </html>
  );
}
