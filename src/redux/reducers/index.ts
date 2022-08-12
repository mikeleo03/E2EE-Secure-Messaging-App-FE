import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import room from './room';
import common from './common';

export const reducers = combineReducers({
  modal,
  auth,
  room,
  common,
});

export type AppStateType = ReturnType<typeof reducers>;
