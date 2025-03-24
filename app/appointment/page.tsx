import { Metadata } from "next"

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
    <div>Appointment</div>
  )
}

export default page