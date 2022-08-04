/* eslint-disable indent */
import {
  AuthAction,
  AuthState,
  AuthType,
  SetAuthorized,
  SetToken,
  SetTopic,
  SetUserData,
} from '../types/auth';

const initialState: AuthState = {
  token: '',
  isAuthorized: false,
  userData: null,
  topic: -1,
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

  const setUserData = (): AuthState => {
    const { payload: userData } = action as SetUserData;
    return { ...state, userData };
  };

  const setTopic = (): AuthState => {
    const { payload: topic } = action as SetTopic;
    return { ...state, topic };
  };

  switch (type) {
    case AuthType.SET_TOKEN:
      return setToken();
    case AuthType.SET_IS_AUTHORIZED:
      return setIsAuthorized();
    case AuthType.SET_USERDATA:
      return setUserData();
    case AuthType.SET_TOPIC:
      return setTopic();
    default:
      return state;
  }
};

export default auth;
