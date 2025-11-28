function Topbar({ user }) {
  try {
    const [showNotifications, setShowNotifications] = React.useState(false);
    const notifications = [
      { id: 1, text: 'Nuevo documento subido', time: '5 min' },
      { id: 2, text: 'Usuario nuevo registrado', time: '1 hora' },
      { id: 3, text: 'Actualización completada', time: '2 horas' }
    ];

    return (
      <div 
        className="bg-black text-white p-4 flex items-center justify-end gap-6"
        data-name="topbar"
        data-file="components/Topbar.js"
      >
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative hover:text-gray-300 transition"
          >
            <div className="icon-bell text-xl"></div>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-white text-gray-900 rounded-lg shadow-xl z-50">
              <div className="p-4 border-b">
                <h3 className="font-bold">Notificaciones</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map(notif => (
                  <div key={notif.id} className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm">{notif.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border-2 border-white">
            <img 
              src="https://ui-avatars.com/api/?name={user.name}&background=random" 
              alt="Usuario"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-sm">{user.name}</p>
            <p className="text-xs text-gray-400">{user.role}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar component error:', error);
    return null;
  }
}