import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeController from "@/components/utils/ThemeController";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@Luc-Nick | Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="retro" >
      <body className={inter.className}>
        <ThemeController />
        {children}
      </body>
    </html>
  );
}
