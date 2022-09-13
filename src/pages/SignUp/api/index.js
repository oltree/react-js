import { api } from "../../../api";

export const signUp = (signUpInfo) => api.post("/auth/signup", signUpInfo);
