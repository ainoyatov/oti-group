import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center">
      <h2 className="text-4xl font-semibold text-gray-800">404 - Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">Could not find the requested resource.</p>
      <Link 
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Return Home
      </Link>
    </div>
  )
}