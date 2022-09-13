import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export const apiConfig = {
  baseURL: BASE_URL,
};

const api = axios.create(apiConfig);

api.interceptors.request.use((axiosConfig) => {
  console.log(axiosConfig);
});

export { api };
