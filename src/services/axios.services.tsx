import axios from 'axios';
import {apiConfig} from '../config';

const client = axios.create({
  baseURL: apiConfig.baseUrl,
});

client.interceptors.response.use(response => {
  return response.data;
});

export default client;
