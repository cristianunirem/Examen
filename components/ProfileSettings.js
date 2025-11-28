function ProfileSettings({ user, setUser }) {
  try {
    const [name, setName] = React.useState(user.name);
    const [email, setEmail] = React.useState(user.email || `${user.username}@sistema.com`);
    const [showSuccess, setShowSuccess] = React.useState(false);

    const handleSave = () => {
      const updatedUser = { ...user, name, email };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          alert('Foto de perfil actualizada');
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="bg-white bg-opacity-90 backdrop-blur p-6 rounded-lg shadow-lg max-w-2xl" data-name="profile-settings" data-file="components/ProfileSettings.js">
        <h2 className="text-2xl font-bold mb-6">Configuración de Perfil</h2>
        
        {showSuccess && (
          <div className="bg-green-500 text-white p-3 rounded mb-4">
            Perfil actualizado correctamente
          </div>
        )}

        <div className="mb-6 flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
            <img src={`https://ui-avatars.com/api/?name=${user.name}&background=random&size=200`} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>
            <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block">
              Cambiar Foto
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-bold mb-2">Nombre Completo</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label className="block font-bold mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label className="block font-bold mb-2">Usuario</label>
            <input type="text" value={user.username} disabled className="w-full px-4 py-2 border rounded bg-gray-100" />
          </div>
          <div>
            <label className="block font-bold mb-2">Rol</label>
            <input type="text" value={user.role} disabled className="w-full px-4 py-2 border rounded bg-gray-100" />
          </div>
          <button onClick={handleSave} className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">
            Guardar Cambios
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProfileSettings component error:', error);
    return null;
  }
}