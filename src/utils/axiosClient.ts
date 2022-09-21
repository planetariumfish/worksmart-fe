import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:8080",
  withCredentials: true,
});
