import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://vpic.nhtsa.dot.gov/api/vehicles",
});
