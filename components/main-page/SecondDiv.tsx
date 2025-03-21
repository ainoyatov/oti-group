import {Icon} from '@iconify/react'
import Image from 'next/image'
import ThreeEasySteps from './ThreeEasySteps'

const SecondDiv = () => {
  return (
    <div className='flex flex-col items-center p-2 py-20 space-y-4 '>
        <div className='flex flex-col text-4xl md:text-5xl p-2 font-bold '>
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
          We help property owners get out of properties from just needting to sell their house fast to upside down in debt and on the verge
          of losing the property. Many people think that the situation they are currently in is inescapable, but that is not always true. 
          We can help out with:
        </div>

        <ThreeEasySteps />

        <div className="flex flex-row items-center text-2xl p-2  bg-orange-400 text-white max-lg:hidden">
          <div className="mr-4">
              <Icon icon="carbon:phone-filled" width="32" height="32" />
          </div> 
          <a href="tel:+16822677741">Call Me Today: 682-267-7741</a>
        </div>

    </div>
  )
}

export default SecondDiv


{/*     
  <div className='flex flex-row space-x-2'>
    <div className='flex flex-col max-w-[360px] items-center bg-gray-50 shadow-lg'>
      <Image 
        alt="love my home icon"
        src="/loving-home-icon.png"
        width={150}
        height={1}
      />
      <div>
        REACH OUT - Fill out the form online, call or text, and we'll get your property details
      </div>
    </div>
    <div>B</div>
    <div>C</div>
  </div> 
*/}