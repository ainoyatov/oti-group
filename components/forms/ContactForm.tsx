'use client';

import { sendEmail } from "@/lib/sendEmail";
import { useState } from "react";

export type FormDataPoints = {
    property_address?: string,
    city: string,
    state: string,
    zipcode: string,
    full_name?: string,
    email?: string
    phone?: string
}


const ContactForm = () => {

    const [state, setState] = useState({});
    
    const FormAction = async (formData: FormData) => {

        // Build payload
        const payload: FormDataPoints = {
            property_address: formData.get('property-address') as string,
            city: formData.get('city') as string,
            state: formData.get('state') as string,
            zipcode: formData.get('zipcode') as string,
            full_name: formData.get('full-name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,

        }

        console.log(payload);

        // const res = await fetch('/api/form', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(payload),
        // })

        // const data = await res.json();
        // setState(data);
        // sendEmail(data);

        // if (data.status == 'ok') {
        //     setTimeout(() => window.location.reload(), 2000)
        // }
    }

    return (
        <form action={FormAction}>
            <div className="flex-1 flex justify-center p-4 ">
                <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-white bg-opacity-70 nest-hub-fix">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                        Get Free No-Obligation Offer Now!
                    </h2>
                    <div className="space-y-4">
                    <input type="text" name="property-address" placeholder="Property Address" className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                    <div className="flex space-x-2">
                        <input type="text" name="city" placeholder="City" className="w-1/3 p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                        <input type="text" name="state" placeholder="State" className="w-1/3 p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                        <input type="text" name="zipcode" placeholder="Zipcode" className="w-1/3 p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                    </div>
                    <input type="text" name="full-name" placeholder="Full Name" className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                    <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                    <input type="text" name="phone" placeholder="Phone" className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600" />
                    <button type="submit" className="w-full bg-black p-3 rounded-md text-white font-bold">
                        Get Cash Offer
                    </button>
                    </div>
                    <p className="text-xs mt-4 text-gray-800">
                        By submitting this request for information, I hereby agree to <a href="https://otinvestmentgroup.com/privacy-policy"><span className="font-bold">Terms Of Use and Privacy Policy </span></a>
                        and consent to receive messages or calls via email, phone and or SMS. Standard Msg and Data Rates Apply.
                    </p>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;