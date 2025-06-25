export default function XPCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium text-gray-500">XP Progress</h3>
          <p className="text-2xl font-bold mt-1">1,247</p>
        </div>
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
          <span className="text-yellow-600 font-bold">XP</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Level 5</span>
          <span>125/400</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="h-2 rounded-full bg-yellow-400" style={{ width: '31%' }}></div>
        </div>
      </div>
    </div>
  );
}