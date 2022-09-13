import { api } from "../../../api";

export const signIn = (credentials) => api.post("/auth/signIn", credentials);
