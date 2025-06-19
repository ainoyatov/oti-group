import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/navigation/TopMenu";
import Footer from "@/components/navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const {SITE_NAME} = process.env

const baseUrl = "https://othomebuyers.com"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  description: "Buy Sell Homes, Sell my house cash, Need to sell fast, Need help with mortgage, How to sell my house fast, What is the fastest I can sell my house, How soon can the bank take my home",
  robots: {
    follow: true,
    index: true
  }

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
        <TopMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
