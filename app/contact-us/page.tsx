import { Metadata } from "next";
import ResendForm from "@/components/forms/ResendForm";

export const metadata: Metadata = {
  title: "Contact OT Home Buyers | Get in Touch Today",
  description:
    "Have questions about selling your home? Call, email, or message OT Home Buyers for quick support and reliable assistance.",
  robots: {
    follow: true,
    index: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us/`,
  },
};

const ContactUs = () => {
  return (
    <div>
      <div>
        <div className="text-[#F5B429] text-4xl md:text-5xl font-bold text-center flex justify-center mt-8 max-md:mt-10">
          Get In Touch
        </div>
        <div className="text-neutral-500  text-lg  text-center font-medium flex justify-center p-4 dark:invert">
          Any questions? Just write us a message!
        </div>
      </div>

      <div className="p-4 flex lg:justify-center ">
        <ResendForm />
      </div>
    </div>
  );
};

export default ContactUs;
