import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("Ошибка при отправке запроса:", error.message);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Ошибка при получении ответа:", error.message);
    return Promise.reject(error);
  }
);
