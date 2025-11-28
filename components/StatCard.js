function StatCard({ title, value, color, icon }) {
  try {
    return (
      <div 
        className={`${color} p-6 rounded-lg shadow-lg`}
        data-name="stat-card"
        data-file="components/StatCard.js"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700 font-bold mb-2">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
          </div>
          <div className="w-14 h-14 bg-white bg-opacity-50 rounded-full flex items-center justify-center">
            <div className={`icon-${icon} text-2xl text-gray-900`}></div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StatCard component error:', error);
    return null;
  }
}