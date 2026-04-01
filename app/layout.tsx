import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fat Calico & Co | High-Quality Sites Just RM100",
  description:
    "Need a website? RM100 one-time – mobile-friendly, free hosting/domain forever. No hidden fees. Look premium without the price tag!",
  keywords:
    "website design Malaysia, affordable website RM100, buat website murah Malaysia, cheap website builder Malaysia, portfolio website, content creator website, freelancer website, alternative to Linktree, no monthly fee website, one time payment website, free domain website Malaysia",
  openGraph: {
    title: "Fat Calico & Co | High-Quality Sites Just RM100",
    description:
      "Need a website? RM100 one-time – mobile-friendly, free hosting/domain forever. No hidden fees. Look premium without the price tag!",
    type: "website",
    url: "https://fatcalico.vercel.app",
    siteName: "Fat Calico & Co",
    images: [
      {
        url: "https://fatcalico.vercel.app/fatcalicodev.jpg",
        width: 1200,
        height: 630,
        alt: "Fat Calico & Co | High-Quality Sites Just RM100",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fat Calico & Co | High-Quality Sites Just RM100",
    description:
      "Need a website? RM100 one-time – mobile-friendly, free hosting/domain forever. No hidden fees. Look premium without the price tag!",
    images: ["https://fatcalico.vercel.app/fatcalicodev.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
