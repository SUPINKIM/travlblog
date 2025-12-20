import "./globals.css";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Press_Start_2P } from "next/font/google";

import Error from "@/components/common/error";
import { VisitorProvider } from "@/hooks/visitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supin's blog",
  description: "나만의 블로그를 만들어보자",
};

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pixelFont.variable}>
      <body className={inter.className}>
        <Error>
          <VisitorProvider>
            <main className="min-w-[320px]">{children}</main>
          </VisitorProvider>
        </Error>
      </body>
    </html>
  );
}
