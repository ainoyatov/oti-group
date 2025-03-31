import FirstDiv from "@/components/main-page/FirstDiv";
import FourthDiv from "@/components/main-page/FourthDiv";
import SecondDiv from "@/components/main-page/SecondDiv";
import ThirdDiv from "@/components/main-page/ThirdDiv";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Sell My House Fast - OT Investment Group',
  description: '',
  robots: {
    follow: true,
    index: true
  },
}

export default function Home() {

  return (
    <div>
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />
      <FourthDiv />
    </div>
  )
}