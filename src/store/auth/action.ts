import {createActionTypes, createApiActions} from './../rootActions';

import {AxiosError} from 'axios';
import {
  SigninActionResponse,
  SigninActionPayload,
  RegisterType,
  RegisterActionResponse,
} from './types';
import {Empty} from '../types';

export const signinAction = createApiActions<
  SigninActionPayload,
  SigninActionResponse,
  Empty
>(createActionTypes('AUTH/SIGNIN'));
export const registerAction = createApiActions<
  RegisterType,
  RegisterActionResponse,
  Empty
>(createActionTypes('AUTH/REGISTER'));

export const verifyDoneAction = createApiActions<
  Empty,
  Empty,
  Empty
>(createActionTypes('AUTH/DONE'));

export const logOutAction = createApiActions(createActionTypes('AUTH/LOGOUT'));
