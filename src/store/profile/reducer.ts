
import {createReducer} from '@reduxjs/toolkit';
import {TInitialState} from './types';
import { map, noop } from 'lodash';
import { clearResulrAction, getMyProfileAction, getOtherProfileAction, sendVerifyCodeAction, sendVerifyPhoneCodeAction } from './action';

const InitialState: TInitialState = {
  myProfile:null,
  code:"",
  result:"",
  otherProfile:null,
};

export const profileReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
     builder.addCase(getMyProfileAction.success, (state, {payload}) => ({
       ...state,
       myProfile:payload,
     }));
    builder.addCase(sendVerifyCodeAction.success, (state, {payload}) => ({
      ...state,
      result:payload.result,
    }));
    builder.addCase(clearResulrAction.request, (state, {payload}) => ({
      ...state,
      result:"",
    }));
    builder.addCase(sendVerifyPhoneCodeAction.success, (state, {payload}) => ({
      ...state,
      result:payload.result,
    }));
    builder.addCase(getOtherProfileAction.success, (state, {payload}) => ({
      ...state,
      otherProfile:payload,
    }));
  },
);
