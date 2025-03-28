

const ContactForm = () => {
    return (
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
                <p className="text-xs mt-4 text-gray-800">
                    By submitting this request for information, I hereby agree to <a href="https://otinvestmentgroup.com/privacy-policy"><span className="font-bold">Terms Of Use and Privacy Policy </span></a>
                    and consent to receive messages or calls via email, phone and or SMS. Standard Msg and Data Rates Apply.
                </p>
            </div>
        </div>
    )
}

export default ContactForm;