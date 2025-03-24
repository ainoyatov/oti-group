import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact',
  description: '',
  robots: {
    follow: true,
    index: true
  },
}

const page = () => {
  return (
    <div>Contact Us</div>
  )
}

export default page