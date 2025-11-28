const USERS = [
  { username: 'super1', password: 'super123', name: 'Super Usuario 1', role: 'Superusuario' },
  { username: 'super2', password: 'super123', name: 'Super Usuario 2', role: 'Superusuario' },
  { username: 'admin1', password: 'admin123', name: 'Administrador 1', role: 'Administrador' },
  { username: 'admin2', password: 'admin123', name: 'Administrador 2', role: 'Administrador' },
  { username: 'user1', password: 'user123', name: 'Usuario 1', role: 'Usuario' },
  { username: 'user2', password: 'user123', name: 'Usuario 2', role: 'Usuario' }
];

function authenticateUser(username, password) {
  return USERS.find(user => user.username === username && user.password === password);
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}