import { Metadata } from "next"
import CalendlyFormBooking from "@/components/forms/CalendlyForm"

export const metadata: Metadata = {
  title: 'Appointment',
  description: 'schedule home consultation, book property evaluation, OT Investment Group appointment, home selling consultation Dallas, property assessment booking, sell my house appointment, foreclosure consultation scheduling, property selling meeting, Dallas home buyers appointment, quick cash offer for house Dallas, sell my house fast because of medical bills Dallas, we buy houses with tax liens Dallas, best cash home buyers in Dallas, cash buyers for rental homes Dallas, cash buyers for homes in financial distress Dallas, sell my apartment building fast Dallas, sell estate property fast Dallas, book a home offer appointment, real estate investor appointment, Dallas property buyers meeting',
  robots: {
    follow: true,
    index: true
  },
}


const page = () => {
  return (
    <div>
      <CalendlyFormBooking />
    </div>
  )
}

export default page