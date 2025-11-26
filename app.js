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
            <p className="text-gray-600 mb-4">Lo sentimos, ocurrió un error inesperado.</p>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-600 text-white rounded">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');

      const user = await authenticateUser(username, password);
      
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
      } else {
        setError('Credenciales incorrectas');
      }
    };

    return (
      <div className="min-h-screen bg-stars flex items-center justify-center p-4" data-name="login-page" data-file="app.js">
        <div className="w-full max-w-md bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-2xl p-8 border border-white border-opacity-30">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          
          <h1 className="text-3xl font-bold text-white text-center mb-2">Sistema de Gestión</h1>
          <p className="text-white text-center mb-8 text-opacity-90">Ingrese sus credenciales</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white font-bold mb-2">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {error && (
              <div className="text-red-200 text-center font-bold bg-red-600 bg-opacity-50 p-2 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-6 text-white text-sm text-opacity-80">
            <p className="font-bold mb-2">Usuarios de prueba:</p>
            <p>Super: super1/super123, super2/super123</p>
            <p>Admin: admin1/admin123, admin2/admin123</p>
            <p>Usuario: user1/user123, user2/user123</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);