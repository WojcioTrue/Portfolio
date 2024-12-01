import type { Metadata, Viewport } from "next";
import "./globals.scss";
import { mabryProRegular } from '@/app/assets/fonts/MabryPro';


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
      <body className={`${mabryProRegular.className}`}>{children}</body>
    </html>
  );
}
