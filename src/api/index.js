import axios from "axios";

import { LOCAL_STORAGE_KEYS } from "../constants";

export const BASE_URL = "http://localhost:3000";

export const apiConfig = {
  baseURL: BASE_URL,
};

const api = axios.create(apiConfig);

api.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return axiosConfig;
});

export { api };
