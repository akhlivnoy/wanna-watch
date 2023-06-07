import { call, put, takeLatest } from 'redux-saga/effects';

import { apiInstance } from '#services/api';
import {
  ApiLoginUserBody,
  ApiLoginUserResponse,
  ApiRegisterUserBody,
  ApiRegisterUserResponse,
} from '#services/api/types';
import { StaticNavigator } from '#services/navigator';

import { userSlice } from '../slices';
import { LoginUserAction, RegisterUserAction } from '../types';

function* loginUserWorker({ payload: { email, password } }: LoginUserAction) {
  const body: ApiLoginUserBody = {
    email,
    password,
  };
  const response: ApiLoginUserResponse = yield call(apiInstance.user.loginUser, body);

  if (response.ok && response.data) {
    yield put(userSlice.actions.loginUserSuccess(response.data));

    StaticNavigator.navigateTo('MainTabs');
  } else {
    // TODO: error from backend side
    yield put(userSlice.actions.loginUserError('Login error'));
  }
}

function* registerUserWorker({ payload: { name, email, phone, password, confirmPassword } }: RegisterUserAction) {
  const params: ApiRegisterUserBody = {
    name,
    email,
    phone,
    password,
    password_confirmation: confirmPassword,
  };

  const response: ApiRegisterUserResponse = yield call(apiInstance.user.registerUser, params);
  if (response.ok && response.data) {
    yield put(userSlice.actions.registerUserSuccess(response.data));
    StaticNavigator.navigateTo('Login');
  } else {
    // TODO: error from backend side
    yield put(userSlice.actions.registerUserError('Register error'));
  }
}

export function* userSaga() {
  yield takeLatest(userSlice.actions.loginUser, loginUserWorker);
  yield takeLatest(userSlice.actions.registerUser, registerUserWorker);
}
