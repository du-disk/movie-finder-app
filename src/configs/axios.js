import axios from 'axios';
import apiConfig from './api-config.js';

const instance = axios.create({
    baseURL: apiConfig.API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        apiKey: apiConfig.API_KEY,
    },
});

export default instance;
