import Image from "next/image"
import {Icon} from '@iconify/react'
import ThreeReasons from "./ThreeReasons"
import BenefitsSection from "./BenefitsSection"

const FourthDiv = () => {
  return (
    <div className="flex flex-col items-center p-2 py-16 space-y-4">
        <div className="flex flex-col text-4xl md:text-5xl p-2 font-bold">
            <div>
                Why Work With Us
            </div>
        </div>
        
        <div className='flex flex-row h-1'>
          <Image 
            alt="small orange dashes"
            src="/small_orange_dashes.png"
            width={30}
            height={5}
          />
          <div className='flex items-center px-1'>
            <Icon icon="fluent-color:star-16" width="32" height="32" />
          </div>
          <Image 
            alt="small orange dashes"
            src="/small_orange_dashes.png"
            width={30}
            height={5}
          />
        </div>

        <div className="text-center leading-loose lg:max-w-[1000px] px-2">
            We are committed to providing top-tier service to every customer. You can trust OT Investment Group to give you the BEST offer to purchase your house.
        </div>

        <ThreeReasons />

        <BenefitsSection />

        <a href="tel:+16822677741">
            <button className="flex flex-row p-2 px-4 gap-2 text-xl cursor-pointer transition-transform transform hover:scale-125 active:scale-125  bg-[#F5B429] text-white hover:bg-orange-500 active:bg-orange-500 rounded-md">
              <Icon icon="fa6-solid:sack-dollar" width={24} height={24} />
              <span>Free Cash Offer</span>
            </button>
        </a>
        
    </div>
  )
}

export default FourthDiv