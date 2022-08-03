import { AuthAction, AuthType } from '../types/auth';

const { SET_TOKEN, SET_IS_AUTHORIZED } = AuthType;

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
