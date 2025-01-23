import axios from "axios";
import { API_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL: API_URL, // Replace with your API URL
});

export const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default axiosInstance