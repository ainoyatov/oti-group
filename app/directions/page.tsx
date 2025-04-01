import Maps from "@/components/navigation/Gmap"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Directions',
  description: '',
  robots: {
    follow: true,
    index: true
  },
}

const Directions = () => {
  return (
    <div className='flex flex-col md:flex-row py-8'>
      
    <div className='flex flex-col p-4 items-center w-full md:my-16'>
      <div className='address__title mb-4 flex items-center text-[#F5B429]'>Office address</div>
      <div className='address__subtitle'>13601 Preston Rd, Suite w107 </div> 
      <div className='address__subtitle'>Dallas, TX 75240</div>
      <div>
        <a href="https://maps.app.goo.gl/zSCtCoUzRrvL4QA28?g_st=ic" target="_blank">
          <button className="address__button">
            Directions
          </button> 
        </a>
      </div>
    </div>
    
    <div className='p-4 w-full h-screen md:h-auto py-8 md:py-0 drop-shadow-xl'>
      <Maps/>
    </div>
    

  </div>
  )
}

export default Directions



