function ContactList() {
  try {
    const contacts = [
      { id: 1, name: 'María García', role: 'Gerente de Proyectos', phone: '+52 55 1234 5678', email: 'maria.garcia@empresa.com' },
      { id: 2, name: 'Juan Pérez', role: 'Desarrollador Senior', phone: '+52 55 8765 4321', email: 'juan.perez@empresa.com' },
      { id: 3, name: 'Ana López', role: 'Diseñadora UX/UI', phone: '+52 55 2468 1357', email: 'ana.lopez@empresa.com' },
      { id: 4, name: 'Carlos Rodríguez', role: 'Analista de Datos', phone: '+52 55 9876 5432', email: 'carlos.rodriguez@empresa.com' },
      { id: 5, name: 'Laura Martínez', role: 'Especialista en Marketing', phone: '+52 55 3691 2580', email: 'laura.martinez@empresa.com' },
      { id: 6, name: 'Pedro Sánchez', role: 'Contador', phone: '+52 55 7412 9630', email: 'pedro.sanchez@empresa.com' }
    ];

    return (
      <div className="bg-white bg-opacity-90 backdrop-blur p-6 rounded-lg shadow-lg" data-name="contact-list" data-file="components/ContactList.js">
        <h2 className="text-2xl font-bold mb-6">Directorio de Contactos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map(contact => (
            <div key={contact.id} className="bg-white p-4 rounded-lg shadow border hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
                  <img src={`https://ui-avatars.com/api/?name=${contact.name}&background=random`} alt={contact.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold">{contact.name}</h3>
                  <p className="text-sm text-gray-600">{contact.role}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="icon-phone text-blue-600"></div>
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="icon-mail text-blue-600"></div>
                  <span className="truncate">{contact.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ContactList component error:', error);
    return null;
  }
}