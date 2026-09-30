import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-center">
      <h1 className="text-6xl font-black text-navy-900">404</h1>
      <p className="mt-4 text-gray-500">Page not found</p>
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-600 font-medium">
        Back home
      </Link>
    </div>
  )
}
