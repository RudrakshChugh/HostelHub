export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <a href="/" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg">
        Return Home
      </a>
    </div>
  );
}