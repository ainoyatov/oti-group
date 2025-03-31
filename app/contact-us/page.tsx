import ContactForm from "@/components/forms/ContactForm";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact',
  description: '',
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
      </div>
    </div>
  )
}

export default ContactUs;