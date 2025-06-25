export default function ResourcesPage() {
  const resources = [
    {
      title: "Data Structures Complete Notes",
      subject: "Computer Science",
      type: "Notes",
      downloads: 342,
      rating: 4.8,
      size: "2.3 MB",
      tags: ["trees", "graphs", "algorithms"],
      author: "Sarah M.",
      date: "2 days ago"
    },
    {
      title: "Operating Systems Mid-term Paper 2023",
      subject: "Computer Science",
      type: "Paper",
      downloads: 156,
      rating: 4.5,
      size: "850 KB",
      tags: ["processes", "memory", "scheduling"],
      author: "Alex R.",
      date: "5 days ago"
    },
    {
      title: "Database Design Assignment Solution",
      subject: "Computer Science",
      type: "Assignment",
      downloads: 98,
      rating: 4.2,
      size: "1.1 MB",
      tags: ["sql", "normalization", "er-diagram"],
      author: "Mike W.",
      date: "1 week ago"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Search and Filters (Unchanged) */}
      <div className="mb-6">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search resources, topics, or tags..."
            className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-3">🔍</span>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Subjects</option>
            <option>Computer Science</option>
            <option>Mathematics</option>
          </select>
          
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Types</option>
            <option>Notes</option>
            <option>Papers</option>
            <option>Assignments</option>
          </select>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
            Upload Resource
          </button>
        </div>
      </div>

      {/* Resources Grid - 3 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-sm line-clamp-1">{resource.title}</h3>
            <p className="text-gray-600 text-xs mt-1">{resource.subject}</p>
            
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {resource.type}
              </span>
              <span className="text-xs text-gray-500">⬇️ {resource.downloads}</span>
              <span className="text-xs text-gray-500">⭐ {resource.rating}</span>
            </div>
            
            <p className="text-xs text-gray-500 mt-2">{resource.size}</p>
            
            <div className="flex flex-wrap gap-1 mt-2">
              {resource.tags.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-xs text-gray-400 mt-2">
              By {resource.author} • {resource.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}