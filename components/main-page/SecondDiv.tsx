import {Icon} from '@iconify/react'
import Image from 'next/image'
import ThreeEasySteps from './ThreeEasySteps'

const SecondDiv = () => {
  return (
    <div className="flex relative bg-[url('/second-div-bg.png')] bg-cover bg-center">
      <div className='flex flex-col w-full items-center p-2 py-16 space-y-4 '>
          <div className='flex flex-col text-4xl md:text-5xl p-2 font-bold'>
            <div>
              We Buy Houses
            </div>
            <div>
              In 3 Easy Steps
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
            We help property owners get out of properties from just needting to sell their house fast to upside down in debt and on the verge
            of losing the property. Many people think that the situation they are currently in is inescapable, but that is not always true. 
            We can help out with:
          </div>

          <ThreeEasySteps />

          <a href="tel:+16822677741">
            <button className="flex flex-row p-2 mt-8 px-4 gap-2 text-2xl items-center cursor-pointer transition-transform transform hover:scale-125 active:scale-125  bg-[#F5B429] text-white hover:bg-orange-500 active:bg-orange-500 rounded-md">
              <Icon icon="carbon:phone-filled" width={24} height={24} />
              <span>Call Me Today: 682-267-7741</span>
            </button>
          </a>

      </div>
    </div>
  )
}

export default SecondDiv