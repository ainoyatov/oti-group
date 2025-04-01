import ContactForm from "@/components/forms/ContactForm"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'How it works',
  description: '',
  robots: {
    follow: true,
    index: true
  },
}

const HowItWorks = () => {
  return (
    <div>
        <div className="flex text-4xl md:text-5xl font-bold justify-center pb-8 text-[#F5B429]">How It Works?</div>
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
          <ContactForm />
        </div>
    </div>
  )
}

export default HowItWorks