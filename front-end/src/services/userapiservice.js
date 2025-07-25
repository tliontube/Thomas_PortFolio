import axiosInstance from './apiservice';

export const getUsers = () => axiosInstance.get('/users');

export const addNewUser = (userData) => axiosInstance.post('/users/addNewUser', userData);

export const userSignIn = (credentials) => axiosInstance.post('/users/signin', credentials);
