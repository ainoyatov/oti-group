import ResendForm from "@/components/forms/ResendForm";
import FaqForm from "@/components/forms/FaqForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about selling your house for cash. Learn how OT Home Buyers ensures a smooth process.",
  robots: {
    follow: true,
    index: true,
  },
};

const FAQ = () => {
  return (
    <div>
      <div className="flex justify-center flex-col w-full items-center">
        <div className="text-[#F5B429] text-4xl md:text-5xl font-bold text-center mt-8 max-md:mt-10">
          Frequently Asked Questions
        </div>
        <div className="text-neutral-500  text-lg font-medium text-center p-4 dark:invert">
          Got questions? Let’s clear them up!
        </div>

        <div className="py-8">
          <FaqForm />
        </div>
      </div>

      <ResendForm />
    </div>
  );
};

export default FAQ;
