'use client';

import { useEffect, useState } from "react";

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

const GoogleReviews = () => {
    const [memory, setMemory] = useState<GoogleReviewProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const FiveReviews = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/google-reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            });

            if (!response.ok) throw new Error("Failed to fetch reviews");

            const data = await response.json();
            setMemory(data.GoogleReviews ?? []);

        } catch (error) {
            console.error("Error fetching reviews:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        FiveReviews();
    }, []);

    return (
        <div>
            {isLoading ? (

                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                    <p className="text-2xl font-semibold mt-4">Loading reviews...</p>
                </div>
            ) : (
                <div>
                    {memory.map((item) => (
                        <div key={item.time}>{item.text}</div>
                    ))}
                </div>
            )}
        </div>
    );
}