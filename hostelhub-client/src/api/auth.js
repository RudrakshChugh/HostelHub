import API from './axios';

export async function registerUser(userData) {
  const res = await API.post('/auth/register', userData);
  localStorage.setItem('token', res.data.token);
  return res.data;
}

export async function loginUser(userData) {
  const res = await API.post('/auth/login', userData);
  localStorage.setItem('token', res.data.token);
  return res.data;
}
