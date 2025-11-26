function Topbar({ user }) {
  try {
    const [showNotifications, setShowNotifications] = React.useState(false);
    const [notifications] = React.useState([
      { id: 1, text: 'Nuevo documento subido', time: 'Hace 5 min' },
      { id: 2, text: 'Usuario actualizado', time: 'Hace 1 hora' },
      { id: 3, text: 'Reunión programada', time: 'Hace 2 horas' }
    ]);

    return (
      <div className="fixed top-0 left-0 right-0 h-16 bg-black text-white flex items-center justify-between px-6 z-50" data-name="topbar" data-file="components/Topbar.js">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Sistema de Gestión</h1>
          <span className="text-sm bg-gray-700 px-3 py-1 rounded">Rol: {user.role}</span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 hover:bg-gray-800 rounded">
              <div className="icon-bell text-xl"></div>
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                {notifications.length}
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white text-black rounded-lg shadow-xl p-4">
                <h3 className="font-bold mb-3">Notificaciones</h3>
                <div className="space-y-2">
                  {notifications.map(notif => (
                    <div key={notif.id} className="p-2 hover:bg-gray-100 rounded">
                      <p className="text-sm">{notif.text}</p>
                      <p className="text-xs text-gray-500">{notif.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 border-white" />
            <span className="font-bold">{user.name}</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar error:', error);
    return null;
  }
}