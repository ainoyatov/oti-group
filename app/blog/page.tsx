import EmblaCarousel from "@/components/embla/EmblaCarousel"
import { EmblaOptionsType } from 'embla-carousel'
import GoogleReviews from "@/components/google/GoogleReviews"
import MobileMenu from "@/components/navigation/MobileMenu"
import { Metadata } from "next"
import TextCarousel from "@/components/google/StaticReviews"

export const metadata: Metadata = {
  title: 'Blog',
  description: 'real estate advice, home selling tips, Dallas property market, foreclosure prevention, property management insights, investment property strategies, homeowner resources, real estate market trends, selling a house in Texas, cash home sales explained, does selling to an investor make sense?, how to sell my home before relocating Dallas, selling a house that needs major repairs Dallas, what’s the fastest way to sell my house in Texas, can I sell my house in 7 days?, who can buy my house this week in Dallas?, how to sell a house with bad tenants Dallas, how to avoid foreclosure in Texas, when is the best time to sell a house in Dallas?, how to sell an inherited house in Texas, selling a house while in probate, real estate scams to avoid',
  robots: {
    follow: true,
    index: true
  },
}

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const BlogPage = () => {
  return (
    <div>
      <TextCarousel />
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS}/> */}
      {/* <GoogleReviews slides={SLIDES} options={OPTIONS}/> */}
    </div>
  )
}

export default BlogPage