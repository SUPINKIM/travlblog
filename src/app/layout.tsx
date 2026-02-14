import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Press_Start_2P } from "next/font/google";

import Error from "@/components/common/error";
import { VisitorProvider } from "@/hooks/visitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supin's log",
  description:
    "Frontend Developer Supin Kim - Portfolio, Travel Blog & Life Log",
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
    <html lang="ko" className={pixelFont.variable}>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Error>
          <VisitorProvider>
            <main className="min-w-[320px] min-h-screen">{children}</main>
          </VisitorProvider>
        </Error>
      </body>
    </html>
  );
}
