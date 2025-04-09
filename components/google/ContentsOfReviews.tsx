'use client';

import Image from "next/image";
import { useState } from "react";
import {Icon} from '@iconify/react'

type GoogleReviewProps = {
    author_name: string;
    author_url?: string;
    language?: string;
    original_language?: string;
    profile_photo_url?: string;
    rating: number;
    relative_time_description?: string;
    text?: string;
    time: number;
    translated?: boolean;
};

const ContentOfReviews: React.FC<{item: GoogleReviewProps}> = ({item}) => {

    const [expanded, setExpanded] = useState(false);

    // Converts Unix timestampt to readable date
    const convertToDate = (t: number) => {
        return new Date(t*1000).toLocaleDateString('en-us', {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
    }

    const toggleExpand = () => {
        setExpanded(!expanded);
    }


    return (
        <div>
            <div className="flex-col space-y-2 py-8 rounded-[1.8rem] font-semibold flex select-none h-auto">
            <div className="flex flex-row gap-2 items-center justify-center">
                <div className="">
                    <Image 
                        src={item.profile_photo_url || '/window.svg'} // Fallback image
                        alt={item.author_name}
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                </div>

                    <div className="text-lg">
                        {item.author_name}
                    </div>
                </div>

                <div className="flex flex-row w-full justify-center">
                    <Icon icon="noto:star" width="24" height="24"/>
                    <Icon icon="noto:star" width="24" height="24"/>
                    <Icon icon="noto:star" width="24" height="24"/>
                    <Icon icon="noto:star" width="24" height="24"/>
                    <Icon icon="noto:star" width="24" height="24"/>
                </div>

                {expanded ? (
                    <div>
                        <div  className={`pt-4 text-[14px] px-1 md:px-8 text-center`}>
                            {item.text}
                        </div>

                        <div onClick={toggleExpand} className="pt-2 flex w-full justify-center">
                            <Icon icon="lucide:chevron-up" width="24" height="24" />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div  className={`pt-4 line-clamp-3 text-[14px] px-1 md:px-8 text-center`}>
                            {item.text}
                        </div>

                        {item.text && item.text.length > 100 && (
                            <div onClick={toggleExpand} className="pt-2 flex w-full justify-center">
                                <Icon icon="lucide:chevron-down" width="24" height="24" />
                            </div>
                        )}
                    
                        
                    </div>
                )}

                <div className="pt-8 text-center">
                    {convertToDate(item.time)}
                </div>

            </div>
        </div>
    );
}

export default ContentOfReviews;