import {authReducer} from './auth/reducer';
import {chatReducer} from './chat/reducer';
import {combineReducers} from '@reduxjs/toolkit';
import { profileReducer } from './profile';

export default combineReducers({
  auth: authReducer,
  chat: chatReducer,
  profile: profileReducer,
});
