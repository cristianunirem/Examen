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

function DashboardApp() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);

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
      <div className="min-h-screen bg-night-sky" data-name="dashboard" data-file="dashboard-app.js">
        <Topbar user={currentUser} />
        <div className="flex pt-16">
          <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard title="Usuarios Activos" value="156" color="bg-red-300" icon="users" />
                <StatsCard title="Documentos" value="89" color="bg-blue-300" icon="file-text" />
                <StatsCard title="Proyectos" value="24" color="bg-green-300" icon="folder" />
                <StatsCard title="Notificaciones" value="12" color="bg-yellow-300" icon="bell" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Calendar />
                <ActivityChart />
              </div>

              <DocumentPanel />
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);