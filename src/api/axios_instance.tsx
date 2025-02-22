import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: "http://localhost:8000",
};

let instance: AxiosInstance = axios.create(config);

export default instance;
