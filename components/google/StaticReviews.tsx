'use client';

import React, { useState } from 'react';
import {Icon} from '@iconify/react'

const GoogleReviewsStatic = [
    
    {user: "Nick Reeves", message: "Vince was great, smooth process, excellent communication throughout, would happily work with them again. Thanks!"},
    {user: "Toneisha James", message: "Great experience With OT Investments group .Helped Me Get My Grandmother's property Taken Care Of . Very professional & Quick . Thanks Again Vince & OT Investment . highly recommend !!!"},
    {user: "Patrick Mccormick", message: "What a great experience with Vince and OT Investment Group. We had been sitting on a vacant house for more than a year. I got texts all the time inquiring when they could make an offer. Then I got a text with a person's name and company. So I looked them up and got a great idea of who I would be dealing with. Talked with Vince on Friday and on Monday he made an offer that made sense to us. They also paid for moving help for possessions we wanted to store and some to move to the curb for sale. Viri was a wonderful help as well. Closing was a breeze and funds were in our account 2 hours later."},
    {user: "Rebecca Myers", message: "Very thorough and hard working."},
    {user: "George Robinson", message:  "I was selling my mother's house but before I could I had to have my mother in a assisted living apartment. It was almost a year before this was done but OT investments worked with me and waited. Once I had my mother secured in her assisted living apartment OT investment work quickly to get my mother her cash"},
    {user: "Brian Reiter", message: "Very helpful from start to finish!"},
    {user: "Tim Borgan", message: "Great company to work with. Had a few issues early, but they went out of the way to ensure a smooth transaction. Great communication throughout the process. Highly recommend."},
    {user: "Shawntell Scott", message: "Wonderful experience. They went out of their way to help with all our needs and time frame. Great communication and closing on the sell of our property. We would highly recommend them."},
    {user: "Thomas Shelley", message: "We had been contacted by several groups asking to purchase our property prior to speaking with OT Investment Group. We are very glad that we went forward with Viri Lule and Vince Chimoga who did everything they promised. Through every step, this considerate team answered questions and worked with us to alleviate our concerns. Viri made the on-site visit, saw the poor condition, understood our situation, and made a fair offer. Vince arranged the next steps, giving special attention to all our requests. Because he kept us informed throughout the process, making sure things were moving smoothly, we highly recommend OT Investments. He explained the closing process and stayed in touch with us all the way. The team scheduled the closing at the best time for us and made sure we had received all documents for review. The professionalism of the team at OT Investments was very impressive."},

]

const TextCarousel = () => {
  // Mobile text loop
  const textsLong = [

    <div className='flex flex-col'>
      <div className='flex justify-center'>Fall Sale</div>
      <div className='flex justify-center'>60% OFF</div>
    </div>,
    
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        Best Price
      </div>
      <div className='flex justify-center'>
        Top Crafstmanship
      </div>
    </div>,

    <div className='flex flex-col'>
      <div className='flex justify-center'>Framed in house</div>
      <div className='flex justify-center'>Delivered in 3 days</div>
    </div>
     
  ];

  // Desktop text loop
  const textsShort = [
    'Fall Sale. 60% OFF.', 
    'Best Price. Top Crafstmanship.', 
    'Framed in house. Delivered in 3 days.'
  ];

  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle right click (next text)
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textsLong.length);
  };

  // Function to handle left click (previous text)
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + textsLong.length) % textsLong.length);
  };

  return (
    <div className='bg-gray-700'>
      <div className='flex flex-row justify-between items-center lg:hidden'>
        <div onClick={handleLeftClick} className='flex p-4'>
          <Icon icon="lucide:chevron-left" width="28" height="28" color='white' />
        </div>

        <div className='flex text-lg text-white'>
          {textsLong[currentIndex]}
        </div>

        <div onClick={handleRightClick} className='flex p-4'>
          <Icon icon="lucide:chevron-right" width="28" height="28" color='white'/>
        </div>
        
      </div>

      <div className='max-lg:hidden grid grid-cols-3 h-20 items-center text-white'>
        {textsShort.map((line, index) => (
          <div key={index} className='flex justify-center'>{line}</div>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;