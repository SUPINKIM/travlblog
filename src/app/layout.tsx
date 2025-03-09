import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Error from "@/components/common/error";
import { VisitorProvider } from "@/hooks/visitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supin's trip blog",
  description: "나만의 여행 블로그를 만들어보자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
