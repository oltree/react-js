import { api } from "../../../api/config";

export const signUp = (signUpInfo) => api.post("/auth/signup", signUpInfo);
