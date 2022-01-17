import {createActionTypes, createApiActions} from '../rootActions';

import {AxiosError} from 'axios';
import {
  chatListResponse, chatMassegesRequest, chatMassegesResp, chatMassegesResponse, chatResponse, getIdChatResponse, getMessageRequest, getRelatedUsersResponse, getUserResponse, sendIdChatModalRequest as GoOutChatRequest, lastMessageResponse, Message, seachUserRequest, seachUserResponse, sendIdRequest, sendOneSignalRequest, sendRequest, sendIdChatModalRequest
} from './types';
import {Empty} from '../types';

export const chatListAction = createApiActions<
  Empty,
  chatListResponse,
  Empty
>(createActionTypes('CHAT/LIST'));

export const chatAction = createApiActions<
  chatMassegesRequest,
  chatMassegesResp,
  Empty
>(createActionTypes('CHAT/MESSAGES'));

export const seachAction = createApiActions<
  seachUserRequest,
  seachUserResponse,
  Empty
>(createActionTypes('USER/SEARCH'));

export const sendAction = createApiActions<
  sendRequest,
  Empty,
  Empty
>(createActionTypes('CHAT/SEND'));

export const sendOneSignalAction = createApiActions<
  sendOneSignalRequest,
  Empty,
  Empty
>(createActionTypes('SIGNAL/SEND'));

export const sendIdAction = createApiActions<
  sendIdRequest,
  getIdChatResponse,
  Empty
>(createActionTypes('CHAT/SENDID'));

export const getMessageAction = createApiActions<
  getMessageRequest,
  Message,
  Empty
>(createActionTypes('CHAT/GETMESSAGE'));

export const newMessageAction = createApiActions<
  Empty,
  Message,
  Empty
>(createActionTypes('CHAT/NEWMESSAGE'));

export const lastMessageAction = createApiActions<
  any,
  lastMessageResponse,
  Empty
>(createActionTypes('CHAT/LASTMESSAGE'));

export const getRelatedUsersAction = createApiActions<
  Empty,
  getRelatedUsersResponse,
  Empty
>(createActionTypes('CHAT/USERRELATED'));

export const UpdateMessageAction = createApiActions<
  any,
  lastMessageResponse,
  Empty
>(createActionTypes('CHAT/UPDATEMESSAGE'));

export const clearFieldsAction = createApiActions<
  Empty,
  Empty,
  Empty
>(createActionTypes('CHAT/CLEAR_FIELDS'));

export const NewUserAction = createApiActions<
  Empty,
  getUserResponse,
  Empty
>(createActionTypes('CHAT/NEWUSER'));

export const UpdateUserAction = createApiActions<
  Empty,
  any,
  Empty
>(createActionTypes('CHAT/UPPDATEUSER'));

export const NewChatAction = createApiActions<
  Empty,
  chatResponse,
  Empty
>(createActionTypes('CHAT/NEWCHAT'));

export const goOutChatAction = createApiActions<
  sendIdChatModalRequest,
  Empty,
  Empty
>(createActionTypes('CHAT/GOOUTCHAT'));

export const muteChatAction = createApiActions<
  sendIdChatModalRequest,
  Empty,
  Empty
>(createActionTypes('CHAT/MUTECHAT'));

export const unMuteChatAction = createApiActions<
  sendIdChatModalRequest,
  Empty,
  Empty
>(createActionTypes('CHAT/UNMUTECHAT'));

export const anchorChatAction = createApiActions<
  sendIdChatModalRequest,
  Empty,
  Empty
>(createActionTypes('CHAT/ANCHORCHAT'));

export const unAnchorChatAction = createApiActions<
  sendIdChatModalRequest,
  Empty,
  Empty
>(createActionTypes('CHAT/UNANCHORCHAT'));

export const clearChatGetAction = createApiActions(createActionTypes('CHAT/CLEARCHATGET'));

