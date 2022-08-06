import axios from "axios";

export const BASE_URL = "https://pokeapi.co/api/v2";

export const apiConfig = {
  baseURL: BASE_URL,
};

export const api = axios.create(apiConfig);
