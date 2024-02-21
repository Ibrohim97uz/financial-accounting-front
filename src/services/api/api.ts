import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Adds bearer token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.pathname = "/login";
    }
    throw error;
  }
);

export const addTokenToAxios = (token: string) => {
  localStorage.setItem("token", token);
};
