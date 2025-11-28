function Calendar() {
  try {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      return { firstDay, daysInMonth };
    };

    const { firstDay, daysInMonth } = getDaysInMonth(currentDate);
    
    const nextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };
    
    const prevMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    return (
      <div className="bg-white bg-opacity-90 backdrop-blur p-6 rounded-lg shadow-lg" data-name="calendar" data-file="components/Calendar.js">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
          <div className="flex gap-2">
            <button onClick={prevMonth} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              <div className="icon-chevron-left text-sm"></div>
            </button>
            <button onClick={() => setCurrentDate(new Date())} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
              Hoy
            </button>
            <button onClick={nextMonth} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              <div className="icon-chevron-right text-sm"></div>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2 text-center">
          {['D', 'L', 'M', 'X', 'J', 'V', 'S'].map(day => (
            <div key={day} className="font-bold text-gray-600 text-sm">{day}</div>
          ))}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`}></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => (
            <div key={i + 1} className="py-2 hover:bg-blue-100 rounded cursor-pointer">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Calendar component error:', error);
    return null;
  }
}