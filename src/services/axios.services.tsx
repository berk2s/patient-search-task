import axios from 'axios';
import {apiConfig} from '../config';

const client = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/fhir+json',
  },
});

client.interceptors.response.use(response => {
  return response.data;
});

export default client;
