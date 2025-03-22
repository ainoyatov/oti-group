import Image from "next/image"
import {Icon} from '@iconify/react'
import ThreeReasons from "./ThreeReasons"

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
          <div className='flex items-center'>
            <Icon icon="fluent-color:star-16" width="32" height="24" />
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
        
        
    </div>
  )
}

export default FourthDiv