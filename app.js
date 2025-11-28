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
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-blue-600 rounded">
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

    const handleLogin = () => {
      const user = authenticateUser(username, password);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center p-4" data-name="app" data-file="app.js">
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-2xl w-full max-w-md border border-white border-opacity-30">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          
          <h1 className="text-3xl font-bold text-white text-center mb-2">Sistema de Gestión</h1>
          <p className="text-white text-center mb-6 text-opacity-90">Iniciar Sesión</p>
          
          {error && (
            <div className="bg-red-500 bg-opacity-80 text-white p-3 rounded mb-4 text-center">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 font-normal"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-3 rounded bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 font-normal"
            />
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition"
            >
              Ingresar
            </button>
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