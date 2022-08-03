/* eslint-disable indent */
import {
  AuthAction,
  AuthState,
  AuthType,
  SetAuthorized,
  SetToken,
} from '../types/auth';

const initialState: AuthState = {
  token: '',
  isAuthorized: false,
};

const auth = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  const { type } = action;

  const setToken = (): AuthState => {
    const { payload: token } = action as SetToken;
    return { ...state, token };
  };

  const setIsAuthorized = (): AuthState => {
    const { payload: isAuthorized } = action as SetAuthorized;
    return { ...state, isAuthorized };
  };

  switch (type) {
    case AuthType.SET_TOKEN:
      return setToken();
    case AuthType.SET_IS_AUTHORIZED:
      return setIsAuthorized();
    default:
      return state;
  }
};

export default auth;
