'use client';

import NextImage from "next/image";
import { useEffect, useState } from "react";
import {Icon} from '@iconify/react';

const GoogleReviewCount = () => {

    const [memory, setMemory] = useState([]);

    const ReviewCount = async () => {

        try {
            const res = await fetch('/api/google-reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            })
    
            if (!res.ok) throw new Error("Failed to fetch the reviews total count");
    
            const data = await res.json();
    
            setMemory(data.DynamicReviewCount ?? []);
    
        } catch (error) {
            console.log("Error fetching reviews total count:", error);
        }
    }

    useEffect(() => {
        ReviewCount();
    }, []);

    return (

        <div className="flex flex-col">
          
            <div className="flex w-full justify-center text-3xl">
                Excellent
            </div>

            <div className="flex flex-row w-full justify-center pb-2">
                <Icon icon="noto:star" width="24" height="24"/>
                <Icon icon="noto:star" width="24" height="24"/>
                <Icon icon="noto:star" width="24" height="24"/>
                <Icon icon="noto:star" width="24" height="24"/>
                <Icon icon="noto:star" width="24" height="24"/>
            </div>
            
            <div className="flex w-full justify-center font-light text-[10px] pb-2">
                Based on <span className="font-bold px-1">{memory} Reviews</span>
            </div>
            
            <div className="flex w-full justify-center pb-2">
                <NextImage 
                    src='/google-logo.svg'
                    alt="Main company logo"
                    width={90}
                    height={90}
                />
            </div>

        </div>

        
    );
}

export default GoogleReviewCount;