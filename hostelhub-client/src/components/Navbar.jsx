import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  BookOpenIcon,
  UsersIcon,
  CalendarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm">  
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">HostelHub+</Link>
        <div className="flex space-x-1">
          <NavLink 
            to="/" 
            icon={<HomeIcon className="h-5 w-5" />} 
            text="Dashboard" 
            active={location.pathname === '/'}
          />
          <NavLink 
            to="/resources" 
            icon={<BookOpenIcon className="h-5 w-5" />} 
            text="Resources" 
            active={location.pathname === '/resources'}
          />
          <NavLink 
            to="/study-buddies" 
            icon={<UsersIcon className="h-5 w-5" />} 
            text="Buddies" 
            active={location.pathname === '/study-buddies'}
          />
          <NavLink 
            to="/schedule" 
            icon={<CalendarIcon className="h-5 w-5" />} 
            text="Schedule" 
            active={location.pathname === '/schedule'}
          />
          <NavLink 
            to="/leaderboard" 
            icon={<TrophyIcon className="h-5 w-5" />} 
            text="Leaderboard" 
            active={location.pathname === '/leaderboard'}
          />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text, active = false }) {
  return (
    <Link 
      to={to} 
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      <span className="mr-1">{icon}</span>
      {text}
    </Link>
  );
}