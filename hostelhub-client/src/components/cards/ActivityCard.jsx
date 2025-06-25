export default function ActivityCard() {
  const activities = [
    {
      type: "Notes",
      course: "Data Structures",
      detail: "Sarah uploaded new notes for Trees and Graphs",
      time: "2 hours ago"
    },
    {
      type: "Help",
      course: "Operating Systems",
      detail: "Alea asked about process synchronization",
      time: "4 hours ago"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index}>
            <div className="flex items-start">
              <div className={`p-2 rounded-full mr-3 ${
                activity.type === "Notes" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-blue-100 text-blue-800"
              }`}>
                {activity.type === "Notes" ? "📝" : "❓"}
              </div>
              <div>
                <p className="font-medium">{activity.course}</p>
                <p className="text-gray-600">{activity.detail}</p>
                <p className="text-sm text-gray-400">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}