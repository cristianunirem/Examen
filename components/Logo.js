function Logo() {
  try {
    return (
      <div className="relative w-16 h-16" data-name="logo" data-file="components/Logo.js">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 rounded transform rotate-45 animate-pulse"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded transform rotate-45"></div>
        <div className="absolute inset-4 bg-white rounded transform rotate-45"></div>
      </div>
    );
  } catch (error) {
    console.error('Logo component error:', error);
    return null;
  }
}