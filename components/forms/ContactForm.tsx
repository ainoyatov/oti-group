'use client';

import { sendEmail } from "@/lib/sendEmail";
import { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

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
    
    const [captcha, setCaptcha] = useState<string | null>(null);

    // State for checking/unchecking the box for TOS
    const [isToggled, setIsToggled] = useState(false);
    const toggle = () => {
        setIsToggled(!isToggled);
    }
    
    const FormAction = async (formData: FormData) => {

        if (captcha) {

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
            
            const verifyCaptcha = await fetch('/api/recaptcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({captcha})
            })

            const {response} = await verifyCaptcha.json();

            if (response) {
                setState(payload);
                
                sendEmail(payload);

                alert('Your message has been sent. Thank you for contacting us.')
                window.location.reload()
            } else {
                alert('Please refresh the page and re-verify Captcha');
            }

        } else {
            alert('Please verify Captcha.')
        }

        
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
                    
                        <div className='mt-4'>
                            <ReCAPTCHA 
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE!} 
                                className='w-full mt-4'
                                onChange={setCaptcha}
                            />
                        </div>

                        {isToggled ? (
                            <div className="py-2">
                                <button
                                    disabled={!isToggled}
                                    type="submit" 
                                    className="w-full bg-black p-3 rounded-md text-white font-bold"
                                    >
                                    <p>Get Cash Offer</p>
                                </button>
                            </div>
                        ):(
                            <div className="py-2">
                                <button
                                    disabled={!isToggled}
                                    type="submit" 
                                    className="w-full bg-black p-3 rounded-md text-white font-bold opacity-50 cursor-not-allowed"
                                >
                                    <p>Get Cash Offer</p>
                                </button>
                            </div>
                        )}

                    </div>
                    <div className="flex">
                        <div className="flex items-center h-4">
                            <input
                                type="checkbox"
                                name="tos-checkbox"
                                value=""
                                required
                                onClick={toggle}
                                className="w-3 h-3 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800"
                            />
                        </div>
                        <div className="ms-2 text-[8px] text-slate-50 dark:text-gray-300">
                            <p className="text-xs text-gray-800">
                                By submitting this request for information, I hereby agree to{' '}
                                <a
                                    href="https://otinvestmentgroup.com/privacy-policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="font-bold">Terms Of Use and Privacy Policy</span>
                                </a>{' '}
                                and consent to receive messages or calls via email, phone and or SMS. Standard Msg and Data Rates Apply.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </form>
    )
}

export default ContactForm;