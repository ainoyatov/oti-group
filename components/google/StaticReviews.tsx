'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const GoogleReviewsStatic = [
  { user: "Nick Reeves", message: "Vince was great, smooth process, excellent communication throughout, would happily work with them again. Thanks!" },
  { user: "Toneisha James", message: "Great experience With OT Investments group. Helped me get my Grandmother's property taken care of. Very professional & Quick. Thanks Again Vince & OT Investment. Highly recommend!!!" },
  { user: "Patrick Mccormick", message: "What a great experience with Vince and OT Investment Group. We had been sitting on a vacant house for more than a year. I got texts all the time inquiring when they could make an offer. Then I got a text with a person's name and company. So I looked them up and got a great idea of who I would be dealing with. Talked with Vince on Friday and on Monday he made an offer that made sense to us. They also paid for moving help for possessions we wanted to store and some to move to the curb for sale. Viri was a wonderful help as well. Closing was a breeze and funds were in our account 2 hours later." },
  { user: "Rebecca Myers", message: "Very thorough and hard working." },
  { user: "George Robinson", message: "I was in the process of selling my mother’s house, and OT Investments patiently worked with me throughout the entire journey" },
  { user: "Brian Reiter", message: "Very helpful from start to finish!" },
  { user: "Tim Borgan", message: "Great company to work with. Had a few issues early, but they went out of the way to ensure a smooth transaction. Great communication throughout the process. Highly recommend." },
  { user: "Shawntell Scott", message: "Wonderful experience. They went out of their way to help with all our needs and time frame. Great communication and closing on the sell of our property. We would highly recommend them." },
  { user: "Thomas Shelley", message: "We had been contacted by several groups asking to purchase our property prior to speaking with OT Investment Group. We are very glad that we went forward with Viri Lule and Vince Chimoga who did everything they promised. Through every step, this considerate team answered questions and worked with us to alleviate our concerns. Viri made the on-site visit, saw the poor condition, understood our situation, and made a fair offer. Vince arranged the next steps, giving special attention to all our requests. Because he kept us informed throughout the process, making sure things were moving smoothly, we highly recommend OT Investments. He explained the closing process and stayed in touch with us all the way. The team scheduled the closing at the best time for us and made sure we had received all documents for review. The professionalism of the team at OT Investments was very impressive." },
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
        setCurrentIndex((prev) =>
        prev >= GoogleReviewsStatic.length - 3 ? 0 : prev + 1
        );
    };
  
    const handleLeftClick = () => {
        setCurrentIndex((prev) =>
        prev <= 0 ? GoogleReviewsStatic.length - 3 : prev - 1
        );
    };

    return (
        <div className="py-8">
            {/* Mobile Carousel */}
            <div className="flex flex-row justify-between items-center lg:hidden">
                <div onClick={handleLeftClick} className="flex p-4 cursor-pointer">
                <Icon icon="lucide:chevron-left" width="28" height="28" color="#F5B429" />
                </div>

                <div className="flex flex-col p-4 text-sm px-4 max-w-xs bg-gray-100 rounded-xl">
                    <div className="font-semibold">{GoogleReviewsStatic[currentIndex].user}</div>
                    {(() => {
                        const review = GoogleReviewsStatic[currentIndex];
                        const isLong = review.message.length > 100;
                        const isExpanded = expandedIndices.includes(currentIndex);

                        return (
                            <div className="italic mt-1">
                            "{isLong && !isExpanded
                                ? review.message.slice(0, 100) + '...'
                                : review.message}"
                            {isLong && (
                                <button
                                onClick={() => toggleExpand(currentIndex)}
                                className="ml-2 text-[#F5B429] underline"
                                >
                                {isExpanded ? 'Read less' : 'Read more'}
                                </button>
                            )}
                            </div>
                        );
                    })()}
                </div>

                <div onClick={handleRightClick} className="flex p-4 cursor-pointer">
                    <Icon icon="lucide:chevron-right" width="28" height="28" color="#F5B429" />
                </div>
            </div>

            {/* Desktop Carousel */}
            <div className="max-lg:hidden relative px-6 flex items-center justify-between overflow-hidden h-[250px]">
                <div onClick={handleLeftClick} className="p-4 cursor-pointer z-10">
                    <Icon icon="lucide:chevron-left" width="32" height="32" color="#F5B429" />
                </div>

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
                            <div className="font-semibold mb-1">{review.user}</div>
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

                <div onClick={handleRightClick} className="p-4 cursor-pointer z-10">
                    <Icon icon="lucide:chevron-right" width="32" height="32" color="#F5B429" />
                </div>
            </div>
        </div>
    );
};

export default TextCarousel;


{/* Desktop Carousel */}
{/* <div className="max-lg:hidden flex flex-row items-center justify-between min-h-[160px] px-6">
    <div onClick={handleLeftClick} className="p-4 cursor-pointer">
        <Icon icon="lucide:chevron-left" width="32" height="32" color="#F5B429" />
    </div>

    <div className="grid grid-cols-3 gap-6 flex-grow text-sm px-4">
        {getDesktopReviews().map((review) => {
            const isLong = review.message.length > 100;
            const isExpanded = expandedIndices.includes(review.index);

            return (
            <div key={review.index} className=" bg-gray-100 rounded-xl p-4">
                <div className="font-semibold mb-1">{review.user}</div>
                <div className="italic">
                "{isLong && !isExpanded
                    ? review.message.slice(0, 100) + '...'
                    : review.message}"
                {isLong && (
                    <button
                    onClick={() => toggleExpand(review.index)}
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

    <div onClick={handleRightClick} className="p-4 cursor-pointer">
        <Icon icon="lucide:chevron-right" width="32" height="32" color="#F5B429" />
    </div>
</div> */}




// 'use client';

// import React, { useState } from 'react';
// import { Icon } from '@iconify/react';

// const GoogleReviewsStatic = [
//   { user: "Nick Reeves", message: "Vince was great, smooth process, excellent communication throughout, would happily work with them again. Thanks!" },
//   { user: "Toneisha James", message: "Great experience With OT Investments group. Helped me get my Grandmother's property taken care of. Very professional & Quick. Thanks Again Vince & OT Investment. Highly recommend!!!" },
//   { user: "Patrick Mccormick", message: "What a great experience with Vince and OT Investment Group. We had been sitting on a vacant house for more than a year. I got texts all the time inquiring when they could make an offer. Then I got a text with a person's name and company. So I looked them up and got a great idea of who I would be dealing with. Talked with Vince on Friday and on Monday he made an offer that made sense to us. They also paid for moving help for possessions we wanted to store and some to move to the curb for sale. Viri was a wonderful help as well. Closing was a breeze and funds were in our account 2 hours later." },
//   { user: "Rebecca Myers", message: "Very thorough and hard working." },
//   { user: "George Robinson", message: "I was in the process of selling my mother’s house, and OT Investments patiently worked with me throughout the entire journey" },
//   { user: "Brian Reiter", message: "Very helpful from start to finish!" },
//   { user: "Tim Borgan", message: "Great company to work with. Had a few issues early, but they went out of the way to ensure a smooth transaction. Great communication throughout the process. Highly recommend." },
//   { user: "Shawntell Scott", message: "Wonderful experience. They went out of their way to help with all our needs and time frame. Great communication and closing on the sell of our property. We would highly recommend them." },
//   { user: "Thomas Shelley", message: "We had been contacted by several groups asking to purchase our property prior to speaking with OT Investment Group. We are very glad that we went forward with Viri Lule and Vince Chimoga who did everything they promised. Through every step, this considerate team answered questions and worked with us to alleviate our concerns. Viri made the on-site visit, saw the poor condition, understood our situation, and made a fair offer. Vince arranged the next steps, giving special attention to all our requests. Because he kept us informed throughout the process, making sure things were moving smoothly, we highly recommend OT Investments. He explained the closing process and stayed in touch with us all the way. The team scheduled the closing at the best time for us and made sure we had received all documents for review. The professionalism of the team at OT Investments was very impressive." },
// ];

// const TextCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Handle wrapping and rotating through the list
//   const handleRightClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % GoogleReviewsStatic.length);
//   };

//   const handleLeftClick = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + GoogleReviewsStatic.length) % GoogleReviewsStatic.length
//     );
//   };

//   // Get 3 reviews for desktop, wrapping around the array
//   const getDesktopReviews = () => {
//     return Array.from({ length: 3 }, (_, i) => {
//       const index = (currentIndex + i) % GoogleReviewsStatic.length;
//       return GoogleReviewsStatic[index];
//     });
//   };

//   return (
//     <div className="bg-gray-700">
//       {/* Mobile Carousel */}
//       <div className="flex flex-row justify-between items-center lg:hidden">
//         <div onClick={handleLeftClick} className="flex p-4 cursor-pointer">
//           <Icon icon="lucide:chevron-left" width="28" height="28" color="white" />
//         </div>

//         <div className="flex flex-col text-sm text-white text-center px-4 max-w-xs">
//           <div className="font-semibold">{GoogleReviewsStatic[currentIndex].user}</div>
//           <div className="italic mt-1">"{GoogleReviewsStatic[currentIndex].message}"</div>
//         </div>

//         <div onClick={handleRightClick} className="flex p-4 cursor-pointer">
//           <Icon icon="lucide:chevron-right" width="28" height="28" color="white" />
//         </div>
//       </div>

//       {/* Desktop Carousel */}
//       <div className="max-lg:hidden flex flex-row items-center justify-between h-32 px-6">
//         <div onClick={handleLeftClick} className="p-4 cursor-pointer">
//           <Icon icon="lucide:chevron-left" width="32" height="32" color="white" />
//         </div>

//         <div className="grid grid-cols-3 gap-6 flex-grow text-white text-sm px-4">
//           {getDesktopReviews().map((review, index) => (
//             <div key={index} className="text-center">
//               <div className="font-semibold mb-1">{review.user}</div>
//               <div className="italic">"{review.message.slice(0, 100)}..."</div>
//             </div>
//           ))}
//         </div>

//         <div onClick={handleRightClick} className="p-4 cursor-pointer">
//           <Icon icon="lucide:chevron-right" width="32" height="32" color="white" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextCarousel;
