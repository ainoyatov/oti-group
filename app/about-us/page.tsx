import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About',
  description: '',
  robots: {
    follow: true,
    index: true
  },
}

const page = () => {
  return (
    <div>About Us</div>
  )
}

export default page