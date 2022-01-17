import {RootState} from '../types';
import {anchorChatAction, chatAction, chatListAction, getMessageAction, getRelatedUsersAction, goOutChatAction, muteChatAction, seachAction, sendAction, sendIdAction, sendOneSignalAction, unAnchorChatAction, unMuteChatAction} from './action';
import {takeLatest, select, put} from '@redux-saga/core/effects';
import {chatListResponse, chatMassegesResponse, getIdChatResponse, getRelatedUsersResponse, sendIdChatModalRequest, Message, seachUserResponse, sendRequest} from './types';
import axios, { AxiosError } from 'axios';
import {default_api} from '../../constants';
import SplashScreen from 'react-native-splash-screen';
import {Log} from '../../utils/Log';

import Toast from 'react-native-toast-message';
import OneSignal from 'react-native-onesignal';
import {TInitialState} from '../auth/types';


function* chatListWorker({
  payload:{}
}: ReturnType<typeof chatListAction['request']>){
  const url = `${default_api.api}/chat/list`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:chatListResponse} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(chatListAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}
function* chatWorker({
  payload:{id, skip}
}: ReturnType<typeof chatAction['request']>){
  const url = `${default_api.api}/chat/messages/${id}`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:chatMassegesResponse} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(chatAction.success({data:response.data,id}));
  }
  catch (e:any) {
    console.log({...e});
  }
}
function* seachUserWorker({
  payload:{userName}
}: ReturnType<typeof seachAction['request']>){
  const url = `${default_api.api}/users/find/${userName}`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:seachUserResponse} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(seachAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}
function* sendWorker({
  payload:{chat, message}
}: ReturnType<typeof sendAction['request']>){
  const url = `${default_api.api}/chat/send`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendRequest} = yield axios.post(url,{chat, message},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function* sendOneSignalWorker({
  payload:{oneSignal}
}: ReturnType<typeof sendOneSignalAction['request']>){
  const url = `${default_api.api}/notifications/setOnesignal`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendRequest} = yield axios.post(url,{oneSignal},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendOneSignalAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}
function* sendIdWorker({
  payload:{user}
}: ReturnType<typeof sendIdAction['request']>){
  const url = `${default_api.api}/chat/getByUser`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:getIdChatResponse} = yield axios.post(url,{user},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendIdAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}
function*  getMessageWorker({
  payload:{message}
}: ReturnType<typeof getMessageAction['request']>){
  const url = `${default_api.api}/chat/message/${message}`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:Message} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(getMessageAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function*  getRelatedUsersWorker({
  payload:{}
}: ReturnType<typeof getRelatedUsersAction['request']>){
  const url = `${default_api.api}/users/related/`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:getRelatedUsersResponse} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(getRelatedUsersAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function*  goOutChatWorker({
  payload:{chat}
}: ReturnType<typeof goOutChatAction['request']>){
  const url = `${default_api.api}/chat/leave`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendIdChatModalRequest} = yield axios.post(url,{chat},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(goOutChatAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function*  muteChatWorker({
  payload:{chat}
}: ReturnType<typeof muteChatAction['request']>){
  const url = `${default_api.api}/chat/mute`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendIdChatModalRequest} = yield axios.post(url,{chat},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(muteChatAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function*  unMuteChatWorker({
  payload:{chat}
}: ReturnType<typeof unMuteChatAction['request']>){
  const url = `${default_api.api}/chat/unmute`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendIdChatModalRequest} = yield axios.post(url,{chat},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(unMuteChatAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function*  anhorChatWorker({
  payload:{chat}
}: ReturnType<typeof anchorChatAction['request']>){
  const url = `${default_api.api}/chat/anchor`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendIdChatModalRequest} = yield axios.post(url,{chat},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(anchorChatAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function*  unAnhorChatWorker({
  payload:{chat}
}: ReturnType<typeof unAnchorChatAction['request']>){
  const url = `${default_api.api}/chat/anchor`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:sendIdChatModalRequest} = yield axios.post(url,{chat},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(unAnchorChatAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

export function* chatWatcher() {
  yield takeLatest(chatListAction.request, chatListWorker);
  yield takeLatest(chatAction.request, chatWorker);
  yield takeLatest(seachAction.request, seachUserWorker);
  yield takeLatest(sendAction.request, sendWorker);
  yield takeLatest(sendOneSignalAction.request, sendOneSignalWorker);
  yield takeLatest(sendIdAction.request, sendIdWorker);
  yield takeLatest(getMessageAction.request, getMessageWorker);
  yield takeLatest(getRelatedUsersAction.request, getRelatedUsersWorker);
  yield takeLatest(goOutChatAction.request, goOutChatWorker);
  yield takeLatest(muteChatAction.request, muteChatWorker);
  yield takeLatest(unMuteChatAction.request, unMuteChatWorker);
  yield takeLatest(anchorChatAction.request, anhorChatWorker);
  yield takeLatest(unAnchorChatAction.request, unAnhorChatWorker);
}
