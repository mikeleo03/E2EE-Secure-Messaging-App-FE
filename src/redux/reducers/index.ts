import { combineReducers } from 'redux';
import auth from './auth';
import common from './common';
import history from './history';
import modal from './modal';
import room from './room';

export const reducers = combineReducers({
  modal,
  auth,
  room,
  common,
  history,
});

export type AppStateType = ReturnType<typeof reducers>;
