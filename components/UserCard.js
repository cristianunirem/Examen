function UserCard({ user }) {
  try {
    const getRoleColor = (role) => {
      switch (role) {
        case 'superusuario': return 'bg-purple-100 text-purple-800';
        case 'admin': return 'bg-blue-100 text-blue-800';
        case 'usuario': return 'bg-green-100 text-green-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    };

    return (
      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow" data-name="user-card" data-file="components/UserCard.js">
        <div className="flex items-center space-x-4 mb-4">
          <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full border-2 border-blue-500" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-600">@{user.username}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${getRoleColor(user.role)}`}>
            {user.role}
          </span>
          <div className="icon-user text-xl text-gray-400"></div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UserCard error:', error);
    return null;
  }
}