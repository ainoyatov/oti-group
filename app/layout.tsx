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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: process.env.NEXT_PUBLIC_SITE_NAME!,
    // template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME!}`,
    template: `%s`,
  },
  description:
    "Sell your house fast in Dallas-Fort Worth, even with back taxes or code violations. OT Home Buyers pays cash for homes as-is with no repairs, fees, or delays.",
  robots: {
    follow: true,
    index: true,
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
        <TopMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
