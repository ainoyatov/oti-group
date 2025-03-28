import { Metadata } from "next"
import CalendlyFormBooking from "@/components/forms/CalendlyForm"

export const metadata: Metadata = {
  title: 'Appointment',
  description: '',
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