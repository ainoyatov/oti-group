'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const GoogleReviewsStatic = [
    { user: "Nick Reeves", message: "Vince was great, smooth process, excellent communication throughout, would happily work with them again. Thanks!" },
    { user: "Toneisha James", message: "Great experience With OT Investments group. Helped me get my Grandmother's property taken care of. Very professional & Quick. Thanks Again Vince & OT Investment. Highly recommend!!!" },
    { user: "Patrick Mccormick", message: "What a great experience with Vince and OT Investment Group. We had been sitting on a vacant house for more than a year. I got texts all the time inquiring when they could make an offer. Then I got a text with a person's name and company. So I looked them up and got a great idea of who I would be dealing with. Talked with Vince on Friday and on Monday he made an offer that made sense to us. They also paid for moving help for possessions we wanted to store and some to move to the curb for sale. Vince was a wonderful help as well. Closing was a breeze and funds were in our account 2 hours later." },
    { user: "Rebecca Myers", message: "Very thorough and hard working. Vince and his team were respectful, patient, and took the time to answer all of my questions. The entire process was well-organized and completed without delays. I appreciated their transparency and professionalism throughout. Would definitely recommend them to anyone looking for a smooth real estate transaction." },
    { user: "George Robinson", message: "I was in the process of selling my mother’s house, and OT Investments patiently worked with me throughout the entire journey" },
    { user: "Brian Reiter", message: "Very helpful from start to finish! Vince made sure we understood everything, kept us updated along the way, and handled all the paperwork seamlessly. I was impressed by how responsive the team was and how easy they made everything. It was a relief to work with people who genuinely cared about our needs." },
    { user: "Tim Borgan", message: "Great company to work with. Had a few issues early, but they went out of the way to ensure a smooth transaction. Great communication throughout the process. Highly recommend." },
    { user: "Shawntell Scott", message: "Wonderful experience. They went out of their way to help with all our needs and time frame. Great communication and closing on the sell of our property. We would highly recommend them." },
    { user: "Thomas Shelley", message: "We had been contacted by several groups asking to purchase our property prior to speaking with OT Investment Group. We are very glad that we went forward with Vince Chimoga who did everything they promised. Through every step, this considerate team answered questions and worked with us to alleviate our concerns. Vince made the on-site visit, saw the poor condition, understood our situation, and made a fair offer. Vince arranged the next steps, giving special attention to all our requests. Because he kept us informed throughout the process, making sure things were moving smoothly, we highly recommend OT Investments." },
  ];

const TextCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedIndices, setExpandedIndices] = useState<number[]>([]); // tracks which are expanded

    const toggleExpand = (index: number) => {
        setExpandedIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const handleRightClick = () => {
        if (currentIndex < GoogleReviewsStatic.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
    };

    const handleLeftClick = () => {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
    };

    // Generates a pastel HSL color from a string
    const generateColorFromName = (name: string) => {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = hash % 360;
        return `hsl(${hue}, 70%, 80%)`;
    };
    

    return(
        <div className='py-8'>
            {/* Mobile Carousel */}
            <div className="flex flex-row items-center justify-between lg:hidden">
            {/* Left button (hide if at first slide) */}
            {currentIndex > 0 ? (
                <div onClick={handleLeftClick} className="flex p-4 cursor-pointer">
                <Icon icon="lucide:chevron-left" width="28" height="28" color="#F5B429" />
                </div>
            ) : (
                <div className="w-[56px] p-4" /> // placeholder for spacing
            )}

            {/* Message container with slide effect (unchanged from last working version) */}
            <div className="relative w-full max-w-xs overflow-hidden">
                <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                {GoogleReviewsStatic.map((review, index) => {
                    const isLong = review.message.length > 100;
                    const isExpanded = expandedIndices.includes(index);

                    return (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 flex flex-col p-4 text-sm bg-gray-100 rounded-xl"
                    >   
                        <div className='flex flex-col-2 items-center justify-between'>
                            <div className='flex flex-row items-center gap-2'>
                                <div
                                    className="flex h-8 w-8 rounded-full items-center justify-center text-sm font-semibold"
                                    style={{ backgroundColor: generateColorFromName(review.user) }}
                                    >
                                    {review.user.charAt(0)}
                                </div>
                                <div className="font-semibold">{review.user}</div>
                            </div>
                            <div>
                                <Image 
                                    src="/google-logo.png"
                                    alt="google logo"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                        
                        
                        <div className="flex flex-row w-full py-2">
                            <Icon icon="noto:star" width="24" height="24"/>
                            <Icon icon="noto:star" width="24" height="24"/>
                            <Icon icon="noto:star" width="24" height="24"/>
                            <Icon icon="noto:star" width="24" height="24"/>
                            <Icon icon="noto:star" width="24" height="24"/>
                        </div>

                        <div className="italic mt-1">
                        "{isLong && !isExpanded
                            ? review.message.slice(0, 100) + '...'
                            : review.message}"
                        {isLong && (
                            <button
                            onClick={() => toggleExpand(index)}
                            className="ml-2 text-[#F5B429] underline"
                            >
                            {isExpanded ? 'Read less' : 'Read more'}
                            </button>
                        )}
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>

            {/* Right button (hide if at last slide) */}
            {currentIndex < GoogleReviewsStatic.length - 1 ? (
                <div onClick={handleRightClick} className="flex p-4 cursor-pointer">
                <Icon icon="lucide:chevron-right" width="28" height="28" color="#F5B429" />
                </div>
            ) : (
                <div className="w-[56px] p-4" /> // placeholder
            )}
            </div>


            {/* Desktop Carousel */}
            <div className="max-lg:hidden relative px-6 flex items-center justify-between overflow-hidden">
            {/* Left button (hide if at first 3) */}
            {currentIndex > 0 ? (
                <div onClick={handleLeftClick} className="p-4 cursor-pointer z-10">
                <Icon icon="lucide:chevron-left" width="32" height="32" color="#F5B429" />
                </div>
            ) : (
                <div className="w-[64px] p-4" /> // placeholder for spacing
            )}

            {/* Review track */}
            <div className="relative w-full overflow-hidden">
                <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                >
                {GoogleReviewsStatic.map((review, index) => {
                    const isLong = review.message.length > 100;
                    const isExpanded = expandedIndices.includes(index);

                    return (
                    <div key={index} className="w-1/3 flex-shrink-0 px-3">
                        <div className="bg-gray-100 rounded-xl p-4 text-sm h-full">
                        <div className='flex flex-col-2 items-center justify-between'>
                            <div className='flex flex-row items-center gap-2'>
                                <div
                                    className="flex h-8 w-8 rounded-full items-center justify-center text-sm font-semibold"
                                    style={{ backgroundColor: generateColorFromName(review.user) }}
                                    >
                                    {review.user.charAt(0)}
                                </div>
                                <div className="font-semibold">{review.user}</div>
                            </div>
                            <div>
                                <Image 
                                    src="/google-logo.png"
                                    alt="google logo"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>

                        <div className="flex flex-row w-full py-2">
                            <Icon icon="noto:star" width="24" height="24"/>
                            <Icon icon="noto:star" width="24" height="24"/>
                            <Icon icon="noto:star" width="24" height="24"/>
                            <Icon icon="noto:star" width="24" height="24"/>
                            <Icon icon="noto:star" width="24" height="24"/>
                        </div>

                        <div className="italic">
                            "{isLong && !isExpanded
                            ? review.message.slice(0, 100) + '...'
                            : review.message}"
                            {isLong && (
                            <button
                                onClick={() => toggleExpand(index)}
                                className="ml-2 text-[#F5B429] underline"
                            >
                                {isExpanded ? 'Read less' : 'Read more'}
                            </button>
                            )}
                        </div>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>

            {/* Right button (hide if last 3 visible) */}
            {currentIndex < GoogleReviewsStatic.length - 3 ? (
                <div onClick={handleRightClick} className="p-4 cursor-pointer z-10">
                <Icon icon="lucide:chevron-right" width="32" height="32" color="#F5B429" />
                </div>
            ) : (
                <div className="w-[64px] p-4" />
            )}
            </div>



        </div>
    );


};

export default TextCarousel;