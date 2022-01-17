import {chatAction, chatListAction, clearChatGetAction, clearFieldsAction, getMessageAction, getRelatedUsersAction, goOutChatAction, lastMessageAction, NewChatAction, newMessageAction, NewUserAction, seachAction, sendAction, sendIdAction, sendOneSignalAction, UpdateMessageAction, UpdateUserAction} from './action';
import {createReducer} from '@reduxjs/toolkit';
import {TInitialState} from './types';
import { map, noop } from 'lodash';

const InitialState: TInitialState = {
  chatList:[  ],
  chatMasseges:{},
  userSearchList:[],
  chatGet:null,
  relatedUsers:[],
};

export const chatReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
    builder.addCase(chatListAction.success, (state, {payload}) => ({
      ...state,
      chatList:payload,
    }));
    builder.addCase(seachAction.success, (state, {payload}) => ({
      ...state,
      userSearchList:payload,
    }));
    builder.addCase(sendAction.success, (state, {payload}) => ({
      ...state,
    }));
    builder.addCase(sendOneSignalAction.success, (state, {payload}) => ({
      ...state,
    }));
    builder.addCase(sendIdAction.success, (state, {payload}) => ({
      ...state,
      chatGet:payload,
    }));
    builder.addCase(clearChatGetAction.request, (state, {payload}) => ({
      ...state,
      chatGet:null,
    }));
    builder.addCase(chatAction.success, (state, {payload:{id,data}}) => {
      
      let newMessages = data
      const last = (state.chatMasseges[id]||[]).map((m)=>{
        const find = newMessages.find((m1)=>m1.id==m.id)
        newMessages = newMessages.filter((m1)=>m1.id!=m.id)
        if(find)return find
        else return m;
      })
      const result = [...newMessages,...last].sort((a,b)=>b.time-a.time)
      return {
      ...state,
      chatMasseges:{...state.chatMasseges,[id]:result}
    }});
    builder.addCase(getMessageAction.success, (state, {payload}) => {
      
      const result = [...state.chatMasseges[payload.chat],payload].sort((a,b)=>b.time-a.time)
      return {
      ...state,
      chatMasseges:{...state.chatMasseges,[payload.chat]:result}
    }});
    builder.addCase(lastMessageAction.success, (state, {payload}) => {
      const {id, ...res} = payload;
      return {
      ...state,
      chatList:state.chatList.map((fd)=>fd.id==id?{...fd, ...res}:fd) 
    }});
    builder.addCase(getRelatedUsersAction.success, (state, {payload}) => ({
      ...state,
      relatedUsers:payload,
    }));
    builder.addCase(newMessageAction.success, (state, {payload}) => {
      const result = [payload,...state.chatMasseges[payload.chat]]
      console.log(result,payload)
      return {
      ...state,
      chatMasseges:{...state.chatMasseges,[payload.chat]:result}
    }});
    builder.addCase(UpdateMessageAction.success, (state, {payload}) => {
      const {id, ...res} = payload;
      return { 
      ...state,
      chatMasseges:{...state.chatMasseges,[payload.chat]:state.chatMasseges[payload.chat].map((fd)=>fd.id==id?{...fd, ...res}:fd)}
    }});
    builder.addCase(clearFieldsAction.request, () => ({
      chatList:[  ],
      chatMasseges:{},
      userSearchList:[],
      chatGet:null,
      relatedUsers:[],
    }));
    builder.addCase(NewUserAction.success, (state, {payload}) => {
      return {
      ...state,
      relatedUsers:[...state.relatedUsers, payload]
    }});
    builder.addCase(UpdateUserAction.success, (state, {payload}) => {
      const {id, ...res} = payload;
      return { 
      ...state,
      relatedUsers: state.relatedUsers.map((fd)=>fd._id==id?{...fd, ...res}:fd)
    }});
    builder.addCase(NewChatAction.success, (state, {payload}) => {
      return {
      ...state,
      chatList:[...state.chatList, payload]
    }});
  },
);
