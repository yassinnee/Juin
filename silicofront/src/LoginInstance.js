// axiosInstance.js
import axios from 'axios';

const LoginInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000/',
});

LoginInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default LoginInstance;
