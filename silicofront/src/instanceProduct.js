import axios from 'axios';

const axiosCoursesInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosCoursesInstance;
