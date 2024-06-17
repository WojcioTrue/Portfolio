import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    width:'device-width', 
    initialScale:1, 
    maximumScale:1
}

export const metadata: Metadata = {
  title: "WojcioTrue_Portfolio",
  description: "Made in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
