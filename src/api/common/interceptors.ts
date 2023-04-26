import type { AxiosInstance } from 'axios';
import store from '@/store/index';

export function setInterceptors(instance: AxiosInstance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    config => {
      // Do something before request is sent
      const token = store.state.auth.token;
      config.headers.Authorization = token;

      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    response => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    error => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return instance;
}
