import TextCarousel from "@/components/google/StaticReviews";
import FirstDiv from "@/components/main-page/FirstDiv";
import FourthDiv from "@/components/main-page/FourthDiv";
import SecondDiv from "@/components/main-page/SecondDiv";
import ThirdDiv from "@/components/main-page/ThirdDiv";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Home Fast | Trusted Cash Home Buyers",
  description:
    "Get a fair cash offer for your home today. No fees, no repairs—just a fast, stress-free sale process from OT Home Buyers.",
  robots: {
    follow: true,
    index: true,
  },
};

export default function Home() {
  return (
    <div>
      <FirstDiv />
      <div className="pt-8 sm:pt-16">
        <TextCarousel />
      </div>
      <SecondDiv />
      <ThirdDiv />
      <FourthDiv />
    </div>
  );
}
