import Axios from "axios";

let acTkn = "";
const apis = Axios.create({
  baseURL: "https://localhost:443",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": acTkn,
  },
});

apis.interceptors.request.use(
  (config: any) => {
    config.headers["x-access-token"] = acTkn;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
apis.interceptors.response.use(
  (config) => {
    if (config.data && config.data.accessToken) acTkn = config.data.accessToken;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default apis;
