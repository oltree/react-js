import { api } from "../../../api";

export const getPokemonDetails = (id) => api.get(`/products/${id}`);
