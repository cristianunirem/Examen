function Calendar() {
  try {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const changeMonth = (delta) => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1));
    };

    const goToToday = () => {
      setCurrentDate(new Date());
    };

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <div className="bg-white rounded-lg p-6 shadow-lg" data-name="calendar" data-file="components/Calendar.js">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
          <div className="flex space-x-2">
            <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-chevron-left text-lg"></div>
            </button>
            <button onClick={goToToday} className="px-3 py-1 bg-blue-600 text-white rounded text-sm font-bold">
              Hoy
            </button>
            <button onClick={() => changeMonth(1)} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-chevron-right text-lg"></div>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
            <div key={day} className="text-center font-bold text-gray-600 text-sm">{day}</div>
          ))}
          {Array(firstDay).fill(null).map((_, i) => <div key={`empty-${i}`}></div>)}
          {days.map(day => (
            <div key={day} className="text-center p-2 hover:bg-blue-100 rounded cursor-pointer">
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Calendar error:', error);
    return null;
  }
}