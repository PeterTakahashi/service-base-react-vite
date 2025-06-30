import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/app/v1",
  withCredentials: true,
});

export { client };
