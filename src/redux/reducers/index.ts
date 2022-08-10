import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import room from './room';

export const reducers = combineReducers({
  modal,
  auth,
  room,
});

export type AppStateType = ReturnType<typeof reducers>;
