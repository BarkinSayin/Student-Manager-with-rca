import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

export const baseService = {
  get: async (endpoint, configs = {}) => {
    try {
      const response = await axiosInstance.get(endpoint, configs);
      console.log(response);
      return response;
    } catch (error) {
      console.error(`GET ${endpoint} error:${error}`);
    }
  },
  post: async (endpoint, data, configs = {}) => {
    try {
      const response = await axiosInstance.post(endpoint, data, configs);
      return response;
    } catch (error) {
      console.error(`POST ${endpoint} error:${error}`);
    }
  },
  delete: async (endpoint, configs = {}) => {
    try {
      const response = await axiosInstance.delete(endpoint, configs);
      return response;
    } catch (error) {
      console.error(`DELETE ${endpoint} error:${error}`);
    }
  },
};
