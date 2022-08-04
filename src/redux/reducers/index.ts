import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';

export const reducers = combineReducers({
  modal,
  auth,
});

export type AppStateType = ReturnType<typeof reducers>;
