import axios from 'axios';
import { API_BASE_URL } from '../config/config.js';

const axiosInstance = axios.create({
    baseUrl: API_BASE_URL
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default axiosInstance;