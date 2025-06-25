export default function StudyBuddyFinder() {
  const studyBuddies = [
    {
      name: "Alex Johnson",
      subject: "Mathematics",
      status: "Open to Study",
      location: "Library - 2nd Floor",
      timeLeft: "2 hours left"
    },
    {
      name: "Emma Lee",
      subject: "Computer Science",
      status: "Open to Study",
      location: "Library - 1st Floor",
      timeLeft: "4 hours left"
    },
    {
      name: "Sarah Chen",
      subject: "Physics",
      status: "Need Help",
      location: "Study Room A",
      timeLeft: "1 hour left"
    },
    {
      name: "James Brown",
      subject: "Mathematics",
      status: "Need Help",
      location: "Study Room B",
      timeLeft: "1.5 hours left"
    },
    {
      name: "Mike Wilson",
      subject: "Chemistry",
      status: "Solo Focus",
      location: "Common Area",
      timeLeft: "3 hours left"
    },
    {
      name: "Lisa Wang",
      subject: "Biology",
      status: "Open to Study",
      location: "Lab - 3rd Floor",
      timeLeft: "2.5 hours left"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Open to Study': return 'bg-green-100 text-green-800';
      case 'Need Help': return 'bg-yellow-100 text-yellow-800';
      case 'Solo Focus': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-6">Find Study Partners</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {studyBuddies.map((buddy, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-bold">{buddy.name}</h3>
            <p className="text-gray-600 text-sm">{buddy.subject}</p>
            
            <div className="mt-2 mb-3">
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(buddy.status)}`}>
                {buddy.status}
              </span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {buddy.location}
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {buddy.timeLeft}
            </div>
            
            <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}