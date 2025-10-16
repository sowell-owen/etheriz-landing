import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Loader from "./_components/Loader";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clash = localFont({
  src: [
    {
      path: "../public/fonts/Clash/ClashDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Clash/ClashDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Clash/ClashDisplay-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Clash/ClashDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

const luxora = localFont({
  src: [
    {
      path: "../public/fonts/LuxoraGrotesk/LuxoraGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LuxoraGrotesk/LuxoraGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/LuxoraGrotesk/LuxoraGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/LuxoraGrotesk/LuxoraGrotesk-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/LuxoraGrotesk/LuxoraGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-luxora",
});

export const metadata: Metadata = {
  title: "Web3 Development Services",
  description: "Etheriz development ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${clash.variable} ${luxora.variable} antialiased flex flex-col min-h-screen !bg-black`}
      >
        <Loader/>
        <main className="flex flex-1 flex-col items-center">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
