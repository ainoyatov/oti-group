import ContactForm from "@/components/forms/ContactForm";
import { Metadata } from "next"
import ResendForm from "@/components/forms/ResendForm"

export const metadata: Metadata = {
  title: 'Contact',
  description: 'contact OT Home Buyers, Dallas home buyers contact, property selling inquiries, real estate assistance Dallas, homeowner support, get in touch with OT Home Buyers, sell my house contact, foreclosure help contact, property solutions inquiry, Dallas property buyers contact, home cash offer in 24 hours Dallas, what’s the best way to sell my home without hassle Dallas, behind on mortgage payments Dallas, how to sell my home before relocating Dallas, avoid foreclosure fast Dallas, mortgage default solutions Dallas, sell house in foreclosure fast Dallas, sell my house online fast Dallas, house buying companies near me Dallas, sell my home without a realtor contact, immediate home sale assistance Dallas',
  robots: {
    follow: true,
    index: true
  },
}

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

      <div className='p-4 flex lg:justify-center '>
        <ContactForm />
        <ResendForm />
      </div>
    </div>
  )
}

export default ContactUs;