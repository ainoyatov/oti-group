'use client';

import { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

export type FormDataPoints = {
    address?: string,
    city?: string,
    state?: string,
    zipcode?: string,
    name?: string,
    email?: string,
    phone?: string,
    message?: string
};

const ContactForm = () => {
    const [state, setState] = useState<Partial<FormDataPoints>>({});
    const [captcha, setCaptcha] = useState<string | null>(null);
    const [agreedToTOS, setAgreedToTOS] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const FormAction = async (formData: FormData) => {
        if (!captcha) {
            alert('Please verify Captcha.');
            return;
        }

        const payload: FormDataPoints = {
            address: formData.get('address') as string,
            city: formData.get('city') as string,
            state: formData.get('state') as string,
            zipcode: formData.get('zipcode') as string,
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        };

        const verifyCaptcha = await fetch('/api/recaptcha', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ captcha }),
        });

        const { success: captchaSuccess, message: captchaMessage } = await verifyCaptcha.json();

        if (!captchaSuccess) {
            alert(captchaMessage || 'Captcha verification failed.');
            return;
        }

        const sendMail = await fetch('/api/resend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const { success, message } = await sendMail.json();

        if (success) {
            alert(message);
            window.location.reload();
        } else {
            alert(message);
        }
    };

    const activeStyle = 'shadow-[inset_0_0_0_1000px_#bfdbfe] dark:shadow-[inset_0_0_0_1000px_#faffbd]';
    const baseStyle = 'w-full p-3 rounded-md border border-gray-300 text-black placeholder-gray-600 dark:placeholder-gray-500';

    const isButtonEnabled = captcha && agreedToTOS;

    return (
        <form action={FormAction}>
            <div className="flex-1 flex justify-center p-4">
                <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-white bg-opacity-70 nest-hub-fix ">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                        Get Free No-Obligation Offer Now!
                    </h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="address"
                            placeholder="Property Address"
                            value={state.address || ''}
                            onChange={handleChange}
                            className={`${baseStyle} ${state.address ? activeStyle : ''}`}
                        />
                        <div className="flex space-x-2">
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={state.city || ''}
                            onChange={handleChange}
                            className={`w-1/3 ${baseStyle} ${state.city ? activeStyle : ''}`}
                        />
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={state.state || ''}
                            onChange={handleChange}
                            className={`w-1/3 ${baseStyle} ${state.state ? activeStyle : ''}`}
                        />
                        <input
                            type="text"
                            name="zipcode"
                            placeholder="Zipcode"
                            value={state.zipcode || ''}
                            onChange={handleChange}
                            className={`w-1/3 ${baseStyle} ${state.zipcode ? activeStyle : ''}`}
                        />
                        </div>

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={state.name || ''}
                            onChange={handleChange}
                            className={`${baseStyle} ${state.name ? activeStyle : ''}`}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={state.email || ''}
                            onChange={handleChange}
                            className={`${baseStyle} ${state.email ? activeStyle : ''}`}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={state.phone || ''}
                            onChange={handleChange}
                            className={`${baseStyle} ${state.phone ? activeStyle : ''}`}
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={state.message || ''}
                            onChange={handleChange}
                            className={`${baseStyle} h-24 resize-none ${state.message ? activeStyle : ''}`}
                        />

                        <div className="mt-4">
                            <ReCAPTCHA
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE!}
                                className="w-full mt-4"
                                onChange={setCaptcha}
                            />
                        </div>

                        <div className="py-2">
                            <button
                                disabled={!isButtonEnabled}
                                type="submit"
                                className={`w-full p-3 rounded-md text-white font-bold transition ${
                                isButtonEnabled ? 'bg-black hover:bg-gray-800' : 'bg-black opacity-50 cursor-not-allowed'
                                }`}
                            >
                                <p>Get Cash Offer</p>
                            </button>
                        </div>

                        <div className="flex">
                            <div className="flex items-center h-4">
                                <input
                                    type="checkbox"
                                    name="tos-checkbox"
                                    checked={agreedToTOS}
                                    onChange={() => setAgreedToTOS((prev) => !prev)}
                                    className="w-3 h-3 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800"
                                />
                            </div>
                            <div className="ms-2 text-[8px] text-slate-50 dark:text-gray-300">
                                <p className="text-xs text-gray-800">
                                    By submitting this request for information, I hereby agree to{' '}
                                <a
                                    href="https://othomebuyers.com/privacy-policy"
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
            </div>
        </form>
    );
};

export default ContactForm;