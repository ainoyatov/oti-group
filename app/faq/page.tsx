import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'FAQ',
  description: '',
  robots: {
    follow: true,
    index: true
  },
}

const FAQ = () => {
  return (
    <div>FAQ</div>
  )
}

export default FAQ