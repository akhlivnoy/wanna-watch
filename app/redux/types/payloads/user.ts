import { PayloadAction } from '@reduxjs/toolkit';

import { ApiRegisterUserSuccessResponse } from '#services/api/types';

export type RegisterUserAction = PayloadAction<{
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}>;

export type RegisterUserSuccessAction = ApiRegisterUserSuccessResponse;

export type LoginUserAction = PayloadAction<{
  email: string;
  password: string;
}>;
