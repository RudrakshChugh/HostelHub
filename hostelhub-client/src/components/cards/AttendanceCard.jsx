import { useState, useEffect } from 'react';
import { getAttendanceSummary, markAttendance } from '../../api/attendance';

export default function AttendanceCard() {
  const [attendanceData, setAttendanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [marking, setMarking] = useState({}); // Track marking status per subject

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getAttendanceSummary();
      console.log('Attendance data:', data);
      setAttendanceData(data);
    } catch (err) {
      setError('Failed to load attendance data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAttendance = async (subject, status) => {
  setMarking(prev => ({ ...prev, [subject]: true }));
  setError('');
  try {
    const today = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
    await markAttendance(subject, today, status);
    await fetchAttendance(); // refresh summary data
  } catch (err) {
    setError('Failed to mark attendance.');
    console.error(err);
  } finally {
    setMarking(prev => ({ ...prev, [subject]: false }));
  }
};
  

  if (loading) return <div>Loading attendance...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!attendanceData || !attendanceData.summary) return <div>No attendance data found.</div>;

  const subjects = Object.keys(attendanceData.summary);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold mb-4">Attendance Overview</h2>

      {subjects.length === 0 && <p>No attendance data found.</p>}

      <div className="space-y-4">
        {subjects.map(subject => {
          const info = attendanceData.summary[subject];
          const safeToBunkCount = attendanceData.safeToBunk[subject] || 0;
          const safeToBunk = safeToBunkCount > 0;

          return (
            <div key={subject}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{subject}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    safeToBunk ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {info.percentage ?? 0}%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full ${
                    safeToBunk ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${info.percentage ?? 0}%` }}
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {info.present}/{info.total} classes attended
                </div>

                <div className="space-x-2">
                  <button
                    disabled={marking[subject]}
                    onClick={() => handleMarkAttendance(subject, 'present')}
                    className="px-3 py-1 text-sm rounded bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
                  >
                    Present
                  </button>
                  <button
                    disabled={marking[subject]}
                    onClick={() => handleMarkAttendance(subject, 'absent')}
                    className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
                  >
                    Absent
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {subjects.some(sub => attendanceData.safeToBunk[sub] > 0) && (
        <div className="mt-6 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-blue-800">
            <span className="font-bold">Note:</span> You can safely miss some classes in subjects marked green above and still maintain at least 75% attendance.
          </p>
        </div>
      )}
    </div>
  );
}
