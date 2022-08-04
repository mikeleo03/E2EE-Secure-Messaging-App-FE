import { UserData } from '../../interfaces/auth';
import { AuthAction, AuthType } from '../types/auth';

const { SET_TOKEN, SET_IS_AUTHORIZED, SET_USERDATA, SET_TOPIC } = AuthType;

export const setToken = (value: string): AuthAction => {
  return {
    type: SET_TOKEN,
    payload: value,
  };
};

export const setIsAuthorized = (value: boolean): AuthAction => {
  return {
    type: SET_IS_AUTHORIZED,
    payload: value,
  };
};

export const setUserData = (value: UserData): AuthAction => {
  return {
    type: SET_USERDATA,
    payload: value,
  };
};

export const setTopic = (value: number): AuthAction => {
  return {
    type: SET_TOPIC,
    payload: value,
  };
};
