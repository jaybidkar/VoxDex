import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoxDex | AI Sign Language Communication",
  description: "Real-Time AI Sign Language to Text & Speech Communication Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${inter.variable} font-sans min-h-full flex flex-col bg-[#030014] text-white selection:bg-indigo-500/30`}>
        {children}
      </body>
    </html>
  );
}
