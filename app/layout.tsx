import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "CarFiti | Professional Car Care You Can Trust",
  description: "Reliable car washing, detailing, and maintenance services in Nairobi, Kenya. Professional car care designed to keep your vehicle clean, safe, and road-ready.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
