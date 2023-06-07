import apisauce, { ApisauceInstance } from 'apisauce';

import { API_BASE_URL, API_DEFAULT_HEADERS, API_TIMEOUT } from '#constants';

import { userApi } from './user';

export const apiClient: ApisauceInstance = apisauce.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: API_DEFAULT_HEADERS,
});

const setAuthHeader = (token: string) => {
  apiClient.setHeader('Authorization', `Bearer ${token}`);
};

export const apiInstance = {
  setAuthHeader,
  user: userApi,
};
