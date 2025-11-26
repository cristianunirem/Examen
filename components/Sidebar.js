function Sidebar({ isOpen, onToggle }) {
  try {
    return (
      <div className={`fixed left-0 top-16 h-full bg-gray-900 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} z-40`} data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-4">
          <button onClick={onToggle} className="w-full flex items-center justify-center p-2 hover:bg-gray-800 rounded mb-4">
            <div className={`icon-${isOpen ? 'chevron-left' : 'chevron-right'} text-xl`}></div>
          </button>

          {isOpen && (
            <div className="flex justify-center mb-6">
              <Logo />
            </div>
          )}

          <nav className="space-y-2">
            <a href="dashboard.html" className="flex items-center p-3 hover:bg-gray-800 rounded">
              <div className="icon-home text-xl"></div>
              {isOpen && <span className="ml-3 font-bold">Inicio</span>}
            </a>
            
            <a href="usuarios.html" className="flex items-center p-3 hover:bg-gray-800 rounded">
              <div className="icon-users text-xl"></div>
              {isOpen && <span className="ml-3 font-bold">Usuarios</span>}
            </a>
            
            <button onClick={logout} className="w-full flex items-center p-3 hover:bg-gray-800 rounded text-left">
              <div className="icon-log-out text-xl"></div>
              {isOpen && <span className="ml-3 font-bold">Cerrar Sesión</span>}
            </button>
          </nav>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar error:', error);
    return null;
  }
}