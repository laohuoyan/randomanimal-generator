import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SeoScript from "@/components/seo/SeoScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Animal Generator",
  description: "Generated a random animal species: A goat, armadillo, orangutan, porpoise, cheetah... Nearly 200 different animals!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <SeoScript />
    </html>
  );
}
