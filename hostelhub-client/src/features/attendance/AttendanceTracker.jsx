export default function AttendanceTracker() {
  const subjects = [
    { name: "Data Structures", attended: 34, total: 40 },
    { name: "Operating Systems", attended: 25, total: 35 }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Attendance Overview</h2>
      {subjects.map((subject, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between mb-1">
            <span>{subject.name}</span>
            <span>{Math.round((subject.attended/subject.total)*100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full bg-blue-600" 
              style={{ width: `${(subject.attended/subject.total)*100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}