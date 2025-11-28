function UserTable() {
  try {
    const users = [
      { id: 1, username: 'super1', name: 'Super Usuario 1', role: 'Superusuario', email: 'super1@sistema.com', status: 'Activo' },
      { id: 2, username: 'super2', name: 'Super Usuario 2', role: 'Superusuario', email: 'super2@sistema.com', status: 'Activo' },
      { id: 3, username: 'admin1', name: 'Administrador 1', role: 'Administrador', email: 'admin1@sistema.com', status: 'Activo' },
      { id: 4, username: 'admin2', name: 'Administrador 2', role: 'Administrador', email: 'admin2@sistema.com', status: 'Activo' },
      { id: 5, username: 'user1', name: 'Usuario 1', role: 'Usuario', email: 'user1@sistema.com', status: 'Activo' },
      { id: 6, username: 'user2', name: 'Usuario 2', role: 'Usuario', email: 'user2@sistema.com', status: 'Inactivo' }
    ];

    const getRoleColor = (role) => {
      switch (role) {
        case 'Superusuario': return 'bg-purple-500';
        case 'Administrador': return 'bg-blue-500';
        case 'Usuario': return 'bg-green-500';
        default: return 'bg-gray-500';
      }
    };

    return (
      <div className="bg-white bg-opacity-90 backdrop-blur p-6 rounded-lg shadow-lg" data-name="user-table" data-file="components/UserTable.js">
        <h2 className="text-2xl font-bold mb-6">Gestión de Usuarios</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4">Usuario</th>
                <th className="text-left py-3 px-4">Nombre</th>
                <th className="text-left py-3 px-4">Rol</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                      <img src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-semibold">{user.username}</span>
                  </td>
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">
                    <span className={`${getRoleColor(user.role)} text-white px-3 py-1 rounded-full text-sm`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{user.email}</td>
                  <td className="py-3 px-4">
                    <span className={`${user.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-3 py-1 rounded-full text-sm`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UserTable component error:', error);
    return null;
  }
}