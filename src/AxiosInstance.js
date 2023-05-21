import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://v3.football.api-sports.io/",
});
