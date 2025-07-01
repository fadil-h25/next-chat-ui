import axios from "axios";

export const api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000",
  timeout: 3000,
});

api.interceptors.response.use(
  (response) => response, // Kalau sukses, langsung return response

  async (error) => {
    if (error.response.status === 401) {
      try {
        const res = await api.post("/auth/refresh");

        // Return ulangi request dengan token baru
        return api(error.config);
      } catch (refreshError) {
        // Kalau refresh token gagal
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
