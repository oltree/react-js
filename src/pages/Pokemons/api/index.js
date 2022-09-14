import { api } from "../../../api";

export const getPokemons = () => api.get("/products");
