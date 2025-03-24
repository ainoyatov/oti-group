import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog',
  description: '',
  robots: {
    follow: true,
    index: true
  },
}

const page = () => {
  return (
    <div>Blog</div>
  )
}

export default page