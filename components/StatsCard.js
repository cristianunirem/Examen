function StatsCard({ title, value, color, icon }) {
  try {
    return (
      <div className={`${color} rounded-lg p-6 shadow-lg`} data-name="stats-card" data-file="components/StatsCard.js">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700 font-bold mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
          </div>
          <div className="w-12 h-12 bg-white bg-opacity-50 rounded-full flex items-center justify-center">
            <div className={`icon-${icon} text-2xl text-gray-800`}></div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StatsCard error:', error);
    return null;
  }
}