import Image from "next/image";

const FirstDiv = () => {
  return (
    <div className="flex relative  bg-[url('/main-home.jpg')] bg-cover bg-center">
        <div className="flex flex-col w-full sm:flex-row bg-gray-900/50 py-4">
            {/* Left Column: Text Content */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-white p-2 sm:p-4">
                <div className="flex flex-col text-white text-5xl lg:text-[56px] xl:text-7xl font-bold">
                    <h2>Sell Your House</h2>
                    <h2>Fast For Cash!</h2>
                </div>
                <ul className="mt-6 m-2 space-y-3 text-xl lg:text-3xl max-w-lg font-medium">
                    <li>✔ Top Dollar Cash Offer</li>
                    <li>✔ Close Within 10 Days</li>
                    <li>✔ Sell In Any Condition</li>
                </ul>
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
            <div className="flex-1 flex justify-center items-center p-4 ">
                <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-white bg-opacity-70 nest-hub-fix">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Get Free No-Obligation Offer Now!
                    </h2>
                    <form className="space-y-4">
                    <input type="text" placeholder="Property Address" className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                    <div className="flex space-x-2">
                        <input type="text" placeholder="City" className="w-1/3 p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                        <input type="text" placeholder="State" className="w-1/3 p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                        <input type="text" placeholder="Zipcode" className="w-1/3 p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                    </div>
                    <input type="text" placeholder="Full Name" className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                    <input type="email" placeholder="Email" className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                    <input type="text" placeholder="Phone" className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                    <button type="submit" className="w-full bg-black p-3 rounded-md text-white font-bold">
                        Get Cash Offer
                    </button>
                    </form>
                    <p className="text-xs mt-4 text-gray-800 text-center">
                    By submitting this request for information, I hereby agree to <a href="https://otinvestmentgroup.com/privacy-policy"><span className="font-bold">Terms Of Use and Privacy Policy </span></a>
                    and consent to receive messages or calls via email, phone and or SMS. Standard Msg and Data Rates Apply.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstDiv