import { ApiResponse } from 'apisauce';

import { IUser } from '#models';
import { ErrorResponse } from '#types/api';

// Login

export type ApiLoginUserBody = {
  email: string;
  password: string;
};

export type ApiLoginUserSuccessResponse = {
  token: string;
  user: IUser;
};

export type ApiLoginUserResponse = ApiResponse<ApiLoginUserSuccessResponse, ErrorResponse>;

// Register

export type ApiRegisterUserBody = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
};

export type ApiRegisterUserSuccessResponse = {
  token: string;
  user: IUser;
};

export type ApiRegisterUserResponse = ApiResponse<ApiRegisterUserSuccessResponse, ErrorResponse>;
