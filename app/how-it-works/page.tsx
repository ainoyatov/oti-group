import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'How it works',
  description: '',
  robots: {
    follow: true,
    index: true
  },
}

const page = () => {
  return (
    <div>How it works</div>
  )
}

export default page