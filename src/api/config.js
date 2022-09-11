import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export const apiConfig = {
  baseURL: BASE_URL,
};

export const api = axios.create(apiConfig);
