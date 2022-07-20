import { combineReducers } from 'redux';
import modal from './modal';

export const reducers = combineReducers({
  modal,
});

export type AppStateType = ReturnType<typeof reducers>;
