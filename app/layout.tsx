import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red Card Thrift — Sports Equipment for Less",
  description:
    "We find used sports equipment, clean it up, and sell it at fair prices — so every kid can play, no matter what.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="bg-navy min-h-screen text-white font-sans">
        {children}
      </body>
    </html>
  );
}
