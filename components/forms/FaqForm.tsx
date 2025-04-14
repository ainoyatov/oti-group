'use client';

import { useState } from "react";

const FaqForm = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqData = [
        {
            question: 'Are there any hidden fees?',
            answer: 'No! We never have any hidden fees or commissions. This means more money in your pocket',
        },
        {
            question: 'How is my offer calculated?',
            answer: 'Our offers are calculated from the information about your house. Information such as the location of your house and how much repairs need to be made are factors in calculating your offer. We also consider the value of other homes that were recently sold in the area.',
        },
        {
            question: 'Are there any obligations?',
            answer: 'Nope! There are zero obligations when submitting your information. It is completely up to you if you want to sell your home to us.'
        },
        {
            question: 'Will my house be listed?',
            answer: 'Because we are not a real estate company, we do not list any of our properties. We only buy and sell homes - and that is it! We might do occasional repairs to the home, or sometimes keep the property as a rental.'
        }
    ]

    const toggleFAQ = (index:number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className="">
            {faqData.map((faq, index) => (
               <div key={index} className="mb-6 border border-gray-300 rounded-xl shadow-xl max-w-[250px] xs:max-w-[270px]">
                <div
                    className="bg-slate-100 rounded-xl px-2 xs:px-4 py-3 cursor-pointer font-bold flex justify-between items-center gap-2"
                    onClick={() => toggleFAQ(index)}
                >
                    <div className="dark:text-black">{faq.question}</div>
                    <span className="dark:invert text-xl">
                        {activeIndex === index ? '-' : '+'}
                    </span>
                </div>
                
                {activeIndex === index && (
                    <div className="p-2 xs:ml-2 py-3">
                    {faq.answer}
                    </div>
                )}
             </div> 
            ))}
        </div>
    );

}

export default FaqForm;