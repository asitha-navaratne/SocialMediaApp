import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000,
});

export default AxiosInstance;
