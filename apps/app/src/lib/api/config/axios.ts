import axios from 'axios';
import axiosRetry from 'axios-retry';

const api = axios.create({
    baseURL: "http://localhost:3001", 
});

axiosRetry(api, {
    retries: 3,
    retryDelay: (retryCount) => {
        console.log(`Tentativa ${retryCount}...`);
        return retryCount * 1000;
    },
    retryCondition: (error) => {
        return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.code === 'ECONNREFUSED';
    }
});

export default api;