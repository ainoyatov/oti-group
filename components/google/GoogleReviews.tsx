'use client';

import { useEffect, useState } from "react";
import ContentOfReviews from "./ContentsOfReviews";
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from '@/components/embla/EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/embla/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

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

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const GoogleReviews: React.FC<PropType> = (props) => {
    const [memory, setMemory] = useState<GoogleReviewProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { slides, options } = props
    // const options: EmblaOptionsType = { loop: true };

    // Embla main carousel states
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} = usePrevNextButtons(emblaApi)

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
            setMemory(data.Reviews ?? []);

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
        <section className="embla py-16">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {memory.map((item, index) => (
                        <div className='embla__slide border border-gray-400 rounded-xl' key={index}>
                            <ContentOfReviews item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(
                        index === selectedIndex ? ' embla__dot--selected' : ''
                    )}
                    />
                ))}
                </div>
            </div>
        </section>
    )

}

export default GoogleReviews;


// return (
//     <div>
//         {isLoading ? (

//             <div className="flex flex-col items-center">
//                 <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
//                 <p className="text-2xl font-semibold mt-4">Loading reviews...</p>
//             </div>
//         ) : (
//             <div>
//                 {memory.map((item) => (
//                     <ContentOfReviews key={item.time} item={item} />
//                 ))}
//             </div>
//         )}
//     </div>
// );