import axios from "axios";
import { LoginForm } from "../types/auth";
import { api } from ".";

export const login = async (data: LoginForm) => {
  const res = await api.post("/auth/login", data);
  return res;
};
