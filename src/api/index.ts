import type { AxiosInstance } from 'axios';
import { setInterceptors } from './common/interceptors';
import axios from 'axios';
import config from '@/config';

function createInstance() {
  if (import.meta.env.DEV) {
    return axios.create({
      // baseURL: process.env.VUE_APP_API_URL,
      baseURL: config.devUrl,
    });
  } else {
    return axios.create({
      baseURL: config.realUrl,
    });
  }
}

// axios 초기화 함수
function createInstanceWithAuth(url: string) {
  let configUrl = '';

  if (import.meta.env.DEV) {
    configUrl = config.devUrl;
  } else {
    configUrl = config.realUrl;
  }

  const instance: AxiosInstance = axios.create({
    // baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    baseURL: `${configUrl}${url}`,
  });

  return setInterceptors(instance);
}

const instance = createInstance();

const posts = createInstanceWithAuth('posts');

export { instance, posts };
