import { api } from "../../../api";

export const getPokemonDetails = (id) => api.get(`/pokemon/${id}`);
