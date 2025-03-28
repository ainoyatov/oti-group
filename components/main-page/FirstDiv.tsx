import Image from "next/image";
import {Icon} from '@iconify/react'
import ContactForm from "../forms/ContactForm";

const FirstDiv = () => {
  return (
    <div className="flex relative  bg-[url('/main-home.jpg')] bg-cover bg-center">
        <div className="flex flex-col w-full sm:flex-row items-center justify-center bg-gray-900/50 py-4">
            <div className="flex flex-col sm:flex-row w-full max-w-screen-xl items-center justify-center gap-4 px-4">
                {/* Left Column: Text Content */}
                <div className="flex-1 flex flex-col justify-center items-center md:items-start text-white p-2 sm:p-4">
                    <div className="flex flex-col text-white text-5xl lg:text-[56px] xl:text-7xl font-bold">
                        <h2>Sell Your House</h2>
                        <h2>Fast For Cash!</h2>
                    </div>
                    <div className=" flex flex-col mt-6 m-2 text-xl lg:text-3xl max-w-lg font-medium">
                        <div className="flex flex-row place-items-center space-x-2">
                            <Icon icon="game-icons:check-mark" color="white" width={20} height={20}/>
                            <div>Top Dollar Cash Offer</div>
                        </div>
                        <div className="flex flex-row place-items-center space-x-2">
                            <Icon icon="game-icons:check-mark" color="white" width={20} height={20}/>
                            <div>Close Within 10 Days</div>
                        </div>
                        <div className="flex flex-row place-items-center space-x-2">
                            <Icon icon="game-icons:check-mark" color="white" width={20} height={20}/>
                            <div>Sell In Any Condition</div>
                        </div>
                    </div>
                    <p className="mt-6 m-2 text-lg lg:text-2xl max-w-sm lg:max-w-lg">
                        Selling your home doesn’t have to be hard. No realtors, no showings, no renovations—just a simple way to sell your home hassle-free.
                    </p>
                    <div>
                        <Image 
                        alt="white arrow"
                        src="/white_arrow.png"
                        width={300}
                        height={1}
                        className="hidden sm:block sm:px-12 lg:mx-16 pt-6"
                        />
                        <Image 
                        alt="white arrow"
                        src="/white_arrow_small.png"
                        width={50}
                        height={1}
                        className="block sm:hidden"
                        />
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <ContactForm />
            </div>
        </div>
    </div>
  )
}

export default FirstDiv