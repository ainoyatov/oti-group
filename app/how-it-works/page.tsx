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
        <div className="text-4xl md:text-5xl font-bold text-center pb-8">How It Works?</div>
        <div className="flex flex-wrap md:flex-nowrap space-y-16 items-center justify-center p-2">
          {/*Left Column */}
          <div className="flex flex-col">
            
            <div>
              <Image 
                alt="An image of animated girl wanting to ask questions"
                src="/asking-question.svg"
                width={1000}
                height={1}
              />
            </div>
          </div>
          {/*Right Column */}
          <div className="md:pr-8">
            <Image 
              alt="An image showing step-by-step how it works to sell your house with the company"
              src="/how-it-works.png"
              width={800}
              height={1}
            />
          </div>
        </div>
    </div>
  )
}

export default HowItWorks



{/* <div className="flex relative bg-[url('/asking-question.svg')] bg-cover bg-center">
<div className="flex flex-col w-full items-center justify-center">
  <div className="text-5xl text-[#F5B429]">
    How It Works?
  </div>
  <div className="text-center max-w-[300px]">
    Join thousands of homeowners who have experienced our simple and easy to sell model.
  </div>
</div>
</div> */}