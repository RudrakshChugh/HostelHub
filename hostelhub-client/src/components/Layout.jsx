import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Make sure this is a default export
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4 md:p-6 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}