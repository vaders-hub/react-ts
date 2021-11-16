import Axios from 'axios';

const apis = Axios.create({
  baseURL: 'https://localhost:443',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apis.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
apis.interceptors.response.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export default apis;