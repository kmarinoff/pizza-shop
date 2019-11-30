import axios from "axios";
import { apiUrl } from "./api";

axios.interceptors.request.use(
  request => {
    console.log("request", request);
    // Edit request config
    return request;
  },
  error => {
    console.log("error on request", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log("response", response);
    // Edit request config
    return response;
  },
  error => {
    console.log("error on response", error);
    return Promise.reject(error);
  }
);

const setAxiosBaseURL = (baseURL?: string) => {
  try {
    axios.defaults.baseURL = baseURL || apiUrl;
  } catch (error) {
    resetAxiosBaseURL();
  }
};

const resetAxiosBaseURL = () => {
  axios.defaults.baseURL = apiUrl;
};

const instance = axios.create();
instance.defaults.baseURL = apiUrl;

instance.interceptors.request.use(
  request => {
    console.log("request", request);
    // Edit request config
    return request;
  },
  error => {
    console.log("error on request", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    console.log("response", response);
    // Edit request config
    return response;
  },
  error => {
    console.log("error on response", error);
    return Promise.reject(error);
  }
);

export { instance, setAxiosBaseURL, resetAxiosBaseURL };
