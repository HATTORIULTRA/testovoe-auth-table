import axios from 'axios';
import { getAccessToken } from '../token.helper.ts';

const instance = axios.create({
  baseURL: 'https://dummyjson.com/',
});

instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default instance;
