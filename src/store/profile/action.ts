import {createActionTypes, createApiActions} from '../rootActions';

import {AxiosError} from 'axios';
import {Empty} from '../types';
import { getMyProfileResponse, getOtherProfileResponse, getVerifyCodeResponse, getVerifyResultResponse, sendAboutRequest, sendColorRequest, sendEmailRequest, sendIdRequest, sendImageRequest, sendNameRequest, sendPhoneRequest } from './types';

export const getMyProfileAction = createApiActions<
  Empty,
  getMyProfileResponse,
  Empty
>(createActionTypes('PROFILE/MY'));

export const sendAboutAction = createApiActions<
  sendAboutRequest,
  Empty,
  Empty
>(createActionTypes('PROFILE/ABOUT'));

export const sendEmailAction = createApiActions<
  sendEmailRequest,
  Empty,
  Empty
>(createActionTypes('PROFILE/EMAIL'));

export const sendPhoneAction = createApiActions<
  sendPhoneRequest,
  Empty,
  Empty
>(createActionTypes('PROFILE/PHONE'));

export const sendColorAction = createApiActions<
  sendColorRequest,
  Empty,
  Empty
>(createActionTypes('PROFILE/COLOR'));

export const sendNameAction = createApiActions<
  sendNameRequest,
  Empty,
  Empty
>(createActionTypes('PROFILE/NAME'));

export const sendVerifyCodeAction = createApiActions<
  getVerifyCodeResponse,
  getVerifyResultResponse,
  Empty
>(createActionTypes('PROFILE/SENDCODE'));

export const sendImageAction = createApiActions<
  sendImageRequest,
  Empty,
  Empty
>(createActionTypes('PROFILE/IMAGE'));

export const clearResulrAction = createApiActions<
Empty,
  Empty,
  Empty
>(createActionTypes('PROFILE/CLEARRES'));

export const sendVerifyPhoneCodeAction = createApiActions<
  getVerifyCodeResponse,
  getVerifyResultResponse,
  Empty
>(createActionTypes('PROFILE/SENDPHONECODE'));

export const getOtherProfileAction = createApiActions<
  sendIdRequest,
  getOtherProfileResponse,
  Empty
>(createActionTypes('PROFILE/OTHER'));