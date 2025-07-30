import { Metadata } from "next";
import CalendlyFormBooking from "@/components/forms/CalendlyForm";

export const metadata: Metadata = {
  title: "Schedule a Free Consultation",
  description:
    "Book your no-obligation home consultation with OT Home Buyers. Get expert guidance and a fast cash offer for your property.",
  robots: {
    follow: true,
    index: true,
  },
};

const page = () => {
  return (
    <div>
      <CalendlyFormBooking />
    </div>
  );
};

export default page;
