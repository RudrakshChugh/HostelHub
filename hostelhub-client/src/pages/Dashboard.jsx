import { useEffect, useState } from 'react';
import AttendanceCard from '../components/cards/AttendanceCard';
import ActivityCard from '../components/cards/ActivityCard';
import StatCard from '../components/stats/StatCard';
import { useAuth } from '../context/AuthProvider';
import { getAttendanceSummary, markAttendance } from '../api/attendance';
import {
  AcademicCapIcon,
  ChartBarIcon,
  ShareIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const { user, logout, loading } = useAuth();
  const [attendance, setAttendance] = useState(null);
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('present');

  useEffect(() => {
    if (!loading && user) {
      fetchSummary();
    }
  }, [loading, user]);

  const fetchSummary = async () => {
    try {
      const data = await getAttendanceSummary();
      console.log('API attendance summary data:', data);

      // Calculate overall attendance percentage from summary object
      const summary = data.summary || {};
      let totalPresent = 0;
      let totalClasses = 0;

      for (const subject in summary) {
        totalPresent += summary[subject].present;
        totalClasses += summary[subject].total;
      }

      const overallPercentage = totalClasses > 0 ? Math.round((totalPresent / totalClasses) * 100) : 0;
      console.log('Calculated overall attendance:', overallPercentage);

      setAttendance(overallPercentage);
    } catch (err) {
      console.error('Error fetching summary:', err);
      setAttendance(null);
    }
  };

  const handleMark = async (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    try {
      await markAttendance(subject, today, status);
      fetchSummary(); // refresh after marking
      setSubject('');  // clear subject input after mark
    } catch (err) {
      console.error('Error marking attendance:', err);
    }
  };

  console.log('Current attendance state:', attendance);

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600">Here's your academic overview for today</p>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded"
        >
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<ChartBarIcon className="h-5 w-5" />}
          title="Overall Attendance"
          value={attendance !== null ? `${attendance}%` : 'Loading...'}
          change="+3% from last week"
          color="blue"
        />
        <StatCard
          icon={<AcademicCapIcon className="h-5 w-5" />}
          title="XP Points"
          value="1,247"
          change="+125 this week"
          color="purple"
        />
        <StatCard
          icon={<ShareIcon className="h-5 w-5" />}
          title="Notes Shared"
          value="23"
          change="+5 this month"
          color="green"
        />
        <StatCard
          icon={<UsersIcon className="h-5 w-5" />}
          title="Study Sessions"
          value="8"
          change="+2 this week"
          color="orange"
        />
      </div>

      {/* Attendance Form */}
      <form onSubmit={handleMark} className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Mark Attendance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="p-2 border rounded"
            required
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Mark Attendance
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceCard />
        <ActivityCard />
      </div>
    </div>
  );
}
