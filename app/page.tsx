import Image from "next/image";

export default function Home() {
  return (
    <div className="flex relative h-screen bg-[url('/main-home.jpg')] bg-cover bg-center">
      
      <div className="flex flex-col w-full md:flex-row bg-gray-900/50">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-white p-8 md:p-10 lg:p-12">
          <div className="flex flex-col text-white text-5xl lg:text-6xl xl:text-7xl font-bold">
            <h2>Sell Your House</h2>
            <h2>Fast For Cash!</h2>
          </div>
          <ul className="mt-6 space-y-3 text-xl lg:text-3xl max-w-lg font-medium">
            <li>✔ Top Dollar Cash Offer</li>
            <li>✔ Close Within 10 Days</li>
            <li>✔ Sell In Any Condition</li>
          </ul>
          <p className="mt-6 text-lg lg:text-2xl max-w-sm lg:max-w-lg">
            Selling your home doesn’t have to be hard. No realtors, no showings, no renovations—just a simple way to sell your home hassle-free.
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex-1 flex justify-center items-center p-8 lg:p-12">
          <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-white bg-opacity-70 ">
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
              By submitting this request, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="relative  h-screen bg-[url('/main-home.jpg')] bg-cover bg-center">
//       <div className="absolute inset-0 flex items-center justify-center bg-gray-900/30">
//         <div className="flex flex-col text-white text-7xl font-bold">
//           <h2>Sell Your House</h2>
//           <h2>Fast For Cash!</h2>
//         </div>
//       </div>
//     </div>
//   );
// }
