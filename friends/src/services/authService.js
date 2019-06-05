import http from './httpService';

const apiEndpoint = 'http://localhost:5000/api/login';
const tokenKey = 'token';

http.setToken(getCurrentUser());

export async function login(credentials) {
  const { data } = await http.post(apiEndpoint, credentials);
  const token = data.payload;
  localStorage.setItem(tokenKey, token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser
};
