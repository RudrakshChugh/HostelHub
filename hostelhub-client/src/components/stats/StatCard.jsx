export default function StatCard({ icon, title, value, change, color = 'blue' }) {
  const colors = {
    blue: { bg: 'bg-blue-400', text: 'text-blue-600' },
    purple: { bg: 'bg-purple-400', text: 'text-purple-600' },
    green: { bg: 'bg-green-400', text: 'text-green-600' },
    orange: { bg: 'bg-orange-400', text: 'text-orange-600' }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          <p className={`text-sm ${colors[color].text} mt-2`}>{change}</p>
        </div>
        <div className={`p-2 rounded-lg ${colors[color].bg}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
