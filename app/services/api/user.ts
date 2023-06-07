import { ErrorResponse } from '#types/api';

import { apiClient } from '.';
import {
  ApiLoginUserBody,
  ApiLoginUserSuccessResponse,
  ApiRegisterUserBody,
  ApiRegisterUserSuccessResponse,
} from './types';

const loginUser = (body: ApiLoginUserBody) =>
  apiClient.post<ApiLoginUserSuccessResponse, ErrorResponse>('/api/v1/auth/login', body);

const registerUser = (body: ApiRegisterUserBody) =>
  apiClient.post<ApiRegisterUserSuccessResponse, ErrorResponse>('/api/v1/auth/register', body);

export const userApi = {
  loginUser,
  registerUser,
};
