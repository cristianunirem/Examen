function Sidebar({ isOpen, toggleSidebar }) {
  try {
    const handleLogout = () => {
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html';
    };

    return (
      <div 
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}
        data-name="sidebar"
        data-file="components/Sidebar.js"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="font-bold text-lg">Sistema</span>
            </div>
            <button onClick={toggleSidebar} className="text-white hover:text-gray-300">
              <div className="icon-x text-xl"></div>
            </button>
          </div>

          <nav className="space-y-2">
            <a href="dashboard.html" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-800 transition">
              <div className="icon-home text-lg"></div>
              <span>Inicio</span>
            </a>
            <a href="usuarios.html" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-800 transition">
              <div className="icon-users text-lg"></div>
              <span>Usuarios</span>
            </a>
            <a href="archivos.html" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-800 transition">
              <div className="icon-folder text-lg"></div>
              <span>Archivos</span>
            </a>
            <a href="contactos.html" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-800 transition">
              <div className="icon-contact text-lg"></div>
              <span>Contactos</span>
            </a>
            <a href="configuracion.html" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-800 transition">
              <div className="icon-settings text-lg"></div>
              <span>Configuración</span>
            </a>
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-800 transition text-left">
              <div className="icon-log-out text-lg"></div>
              <span>Cerrar Sesión</span>
            </button>
          </nav>
        </div>

        {!isOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 bg-gray-900 text-white p-2 rounded z-40"
          >
            <div className="icon-menu text-xl"></div>
          </button>
        )}
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}