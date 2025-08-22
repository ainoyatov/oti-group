import ResendForm from "@/components/forms/ResendForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How Our Home Buying Process Works | Step-by-Step",
  description:
    "Understand our simple 3-step process to sell your home fast for cash. No agents, no commissions—just a smooth experience.",
  robots: {
    follow: true,
    index: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/how-it-works/`,
  },
};

const HowItWorks = () => {
  return (
    <div className="py-8">
      <div className="flex text-4xl md:text-5xl font-bold justify-center pb-8 text-[#F5B429]">
        How It Works?
      </div>
      <div className="flex flex-wrap md:flex-nowrap space-y-16 items-center justify-center p-2">
        {/*Left Column */}
        <div className="flex flex-col">
          <div className="">
            <Image
              alt="An image of animated girl wanting to ask questions"
              src="/asking-question.svg"
              width={1000}
              height={1}
              className="dark:invert"
            />
          </div>
        </div>
        {/*Right Column */}
        <div className="md:pr-8">
          <Image
            alt="An image showing step-by-step how it works to sell your house with the company"
            src="/how_it_works.svg"
            width={800}
            height={1}
            className="dark:invert"
          />
        </div>
      </div>
      <div className="flex justify-center py-6 md:py-16">
        <ResendForm />
      </div>
    </div>
  );
};

export default HowItWorks;
