'use client';

import { InlineWidget } from "react-calendly";

const CalendlyFormBooking = () => {

    return(
      <div>
        <div>
          <div className="text-[#F5B429] text-4xl md:text-5xl font-bold text-center flex justify-center mt-8 max-md:mt-10">
            Schedule Time
          </div>
          <div className="text-neutral-500  text-lg  text-center font-medium flex justify-center p-4 dark:invert">
            In-person or Zoom? Let’s book it!
          </div>
        </div>
  
        <div className='p-4 flex lg:justify-center w-screen h-screen'>
          <InlineWidget 
            url="https://calendly.com/vince-otinvestmentsgroup/30min"
            styles={{
              height: '100%', 
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}  
          />
        </div>
      </div>
    )
  
  }
  
  export default CalendlyFormBooking