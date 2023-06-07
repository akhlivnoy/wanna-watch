import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '#models';
import { ApiLoginUserSuccessResponse, ApiRegisterUserSuccessResponse } from '#services/api/types';
import { Nullable } from '#types/nullable';

import { LoginUserAction, RegisterUserAction } from '../types';

interface IUserState {
  user: Nullable<IUser>;
  token: string;
}

export const INITIAL_STATE: IUserState = {
  user: null,
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loginUser(state, action: LoginUserAction) {},
    loginUserSuccess(state, { payload: { user, token } }: PayloadAction<ApiLoginUserSuccessResponse>) {
      state.user = user;
      state.token = token;
    },
    loginUserError(state, action: PayloadAction<string>) {},

    registerUser(state, action: RegisterUserAction) {},
    registerUserSuccess(state, { payload: { user, token } }: PayloadAction<ApiRegisterUserSuccessResponse>) {
      state.user = user;
      state.token = token;
    },
    registerUserError(state, action: PayloadAction<string>) {},
  },
});
