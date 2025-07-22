import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatt-app-q8n2.onrender.com/api/",
  withCredentials: true,
});
