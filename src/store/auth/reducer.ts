import {
  logOutAction,
  registerAction,
  signinAction,
  verifyDoneAction,
} from './action';
import {createReducer} from '@reduxjs/toolkit';
import {TInitialState} from './types';

const InitialState: TInitialState = {
  token: null,
  id:"",
  verification:null,
};

export const authReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
    builder.addCase(signinAction.success, (state, {payload}) => ({
      ...state,
      token: payload.access_token,
      id:payload.id
    }));
    builder.addCase(registerAction.success, (state, {payload}) => ({
      ...state,
      token: payload.access_token,
      id:payload.id,
      verification:payload.verification,
    }));
    builder.addCase(logOutAction.request, (state, {payload}) => ({
      ...state,
      token: null,
      id:null,
    }));
    builder.addCase(verifyDoneAction.request, (state, {payload}) => ({
      ...state,
      verification:null,
    }));
  },
);
