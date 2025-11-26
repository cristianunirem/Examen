const USERS_DB = [
  { id: 1, username: 'super1', password: 'super123', role: 'superusuario', name: 'Super Usuario 1', avatar: 'https://ui-avatars.com/api/?name=Super+1&background=random' },
  { id: 2, username: 'super2', password: 'super123', role: 'superusuario', name: 'Super Usuario 2', avatar: 'https://ui-avatars.com/api/?name=Super+2&background=random' },
  { id: 3, username: 'admin1', password: 'admin123', role: 'admin', name: 'Administrador 1', avatar: 'https://ui-avatars.com/api/?name=Admin+1&background=random' },
  { id: 4, username: 'admin2', password: 'admin123', role: 'admin', name: 'Administrador 2', avatar: 'https://ui-avatars.com/api/?name=Admin+2&background=random' },
  { id: 5, username: 'user1', password: 'user123', role: 'usuario', name: 'Usuario 1', avatar: 'https://ui-avatars.com/api/?name=User+1&background=random' },
  { id: 6, username: 'user2', password: 'user123', role: 'usuario', name: 'Usuario 2', avatar: 'https://ui-avatars.com/api/?name=User+2&background=random' }
];

async function authenticateUser(username, password) {
  const user = USERS_DB.find(u => u.username === username && u.password === password);
  return user || null;
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}