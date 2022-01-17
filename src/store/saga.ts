import {all} from 'redux-saga/effects';
import {authWatcher} from './auth';
import { chatWatcher } from './chat';
import { profileWatcher } from './profile';

function* rootSaga() {
  yield all([authWatcher(),chatWatcher(),profileWatcher()]);
}

export default rootSaga;
