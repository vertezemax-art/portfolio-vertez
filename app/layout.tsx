import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundBlobs from "@/components/BackgroundBlobs";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Максим Вертезе — веб-разработчик",
  description: "Портфолио веб-разработчика Максима Вертезе",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={inter.variable}><BackgroundBlobs />{children}</body></html>;
}
