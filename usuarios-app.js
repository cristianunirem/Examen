class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-600 text-white rounded">
              Recargar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function UsuariosApp() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);
    const [users] = React.useState([
      { id: 1, username: 'super1', role: 'superusuario', name: 'Super Usuario 1', avatar: 'https://ui-avatars.com/api/?name=Super+1&background=random' },
      { id: 2, username: 'super2', role: 'superusuario', name: 'Super Usuario 2', avatar: 'https://ui-avatars.com/api/?name=Super+2&background=random' },
      { id: 3, username: 'admin1', role: 'admin', name: 'Administrador 1', avatar: 'https://ui-avatars.com/api/?name=Admin+1&background=random' },
      { id: 4, username: 'admin2', role: 'admin', name: 'Administrador 2', avatar: 'https://ui-avatars.com/api/?name=Admin+2&background=random' },
      { id: 5, username: 'user1', role: 'usuario', name: 'Usuario 1', avatar: 'https://ui-avatars.com/api/?name=User+1&background=random' },
      { id: 6, username: 'user2', role: 'usuario', name: 'Usuario 2', avatar: 'https://ui-avatars.com/api/?name=User+2&background=random' }
    ]);

    React.useEffect(() => {
      const user = getCurrentUser();
      if (!user) {
        window.location.href = 'index.html';
      } else {
        setCurrentUser(user);
      }
    }, []);

    if (!currentUser) return null;

    return (
      <div className="min-h-screen bg-night-sky" data-name="usuarios-page" data-file="usuarios-app.js">
        <Topbar user={currentUser} />
        <div className="flex pt-16">
          <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-white mb-6">Gestión de Usuarios</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map(user => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UsuariosApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <UsuariosApp />
  </ErrorBoundary>
);