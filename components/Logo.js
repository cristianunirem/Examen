function Logo() {
  try {
    return (
      <div className="relative w-12 h-12" data-name="logo" data-file="components/Logo.js">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transform rotate-45 rounded-lg shadow-lg"></div>
        <div className="absolute inset-1 bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-400 transform rotate-45 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full shadow-inner"></div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Logo component error:', error);
    return null;
  }
}