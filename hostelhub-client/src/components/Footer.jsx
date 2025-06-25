// Must be default export
export default function Footer() {
  return (
    <footer className="bg-white py-4 border-t">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
        © {new Date().getFullYear()} HostelHub+
      </div>
    </footer>
  );
} 