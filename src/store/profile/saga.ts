import {RootState} from '../types';
import {takeLatest, select, put} from '@redux-saga/core/effects';
import axios, { AxiosError } from 'axios';
import {default_api} from '../../constants';
import SplashScreen from 'react-native-splash-screen';
import {Log} from '../../utils/Log';

import Toast from 'react-native-toast-message';
import OneSignal from 'react-native-onesignal';
import {TInitialState} from '../auth/types';
import { getMyProfileAction, getOtherProfileAction, sendAboutAction, sendColorAction, sendEmailAction, sendImageAction, sendNameAction, sendPhoneAction, sendVerifyCodeAction, sendVerifyPhoneCodeAction } from '.';
import { getMyProfileResponse, getOtherProfileResponse, getVerifyCodeResponse, getVerifyResultResponse, sendAboutRequest, sendColorRequest, sendEmailRequest, sendImageRequest, sendNameRequest, sendPhoneRequest } from './types';


function* getMyProfileWorker({
  payload:{}
}: ReturnType<typeof getMyProfileAction['request']>){
  const url = `${default_api.api}/profile/my`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:getMyProfileResponse} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(getMyProfileAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}
function* sendAboutWorker({
  payload:{about}
}: ReturnType<typeof sendAboutAction['request']>){
  const url = `${default_api.api}/profile/about`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendAboutRequest} = yield axios.post(url,{about},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendAboutAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}
function* sendColorWorker({
  payload:{color}
}: ReturnType<typeof sendColorAction['request']>){
  const url = `${default_api.api}/profile/changeColor`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendColorRequest} = yield axios.post(url,{color},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendColorAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}
function* sendNameWorker({
  payload:{userName}
}: ReturnType<typeof sendNameAction['request']>){
  const url = `${default_api.api}/profile/userName`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendNameRequest} = yield axios.post(url,{userName},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendNameAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function* sendEmailWorker({
  payload:{email}
}: ReturnType<typeof sendEmailAction['request']>){
  const url = `${default_api.api}/verification/sendEmail`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendEmailRequest} = yield axios.post(url,{email},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendEmailAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function* sendPhoneWorker({
  payload:{phone}
}: ReturnType<typeof sendPhoneAction['request']>){
  const url = `${default_api.api}/verification/sendSMS`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendPhoneRequest} = yield axios.post(url,{phone},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendPhoneAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function* sendVerifyCodeWorker({
  payload:{code}
}: ReturnType<typeof sendVerifyCodeAction['request']>){
  const url = `${default_api.api}/verification/verifyEmail`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:getVerifyResultResponse} = yield axios.post(url,{code},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendVerifyCodeAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}



function* sendImageWorker({
  payload:{image, name, mime}
}: ReturnType<typeof sendImageAction['request']>){
  const url = `${default_api.api}/profile/userPhoto`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const formData = new FormData();
    formData.append("image", {uri: image, name: name, type:mime});
    const response: {data:sendImageRequest} = yield axios.post(url,formData,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendImageAction.success(response.data));
    yield put(getMyProfileAction.request({}));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function* sendVerifyPhoneCodeWorker({
  payload:{code}
}: ReturnType<typeof sendVerifyPhoneCodeAction['request']>){
  const url = `${default_api.api}/verification/verifySMS`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:getVerifyResultResponse} = yield axios.post(url,{code},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendVerifyPhoneCodeAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function* getOtherProfileWorker({
  payload:{id}
}: ReturnType<typeof getOtherProfileAction['request']>){
  const url = `${default_api.api}/profile/get/${id}`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:getOtherProfileResponse} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(getOtherProfileAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}


export function* profileWatcher() {
  yield takeLatest(getMyProfileAction.request, getMyProfileWorker);
  yield takeLatest(sendAboutAction.request, sendAboutWorker);
  yield takeLatest(sendColorAction.request, sendColorWorker);
  yield takeLatest(sendNameAction.request, sendNameWorker);
  yield takeLatest(sendEmailAction.request, sendEmailWorker);
  yield takeLatest(sendPhoneAction.request, sendPhoneWorker);
  yield takeLatest(sendVerifyCodeAction.request, sendVerifyCodeWorker);
  yield takeLatest(sendImageAction.request, sendImageWorker);
  yield takeLatest(sendVerifyPhoneCodeAction.request, sendVerifyPhoneCodeWorker);
  yield takeLatest(getOtherProfileAction.request, getOtherProfileWorker);
}
