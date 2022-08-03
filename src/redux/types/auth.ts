export enum AuthType {
  SET_TOKEN = 'SET_TOKEN',
  SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED',
}

export interface AuthState {
  token: string;
  isAuthorized: boolean;
}

export interface SetToken {
  type: AuthType.SET_TOKEN;
  payload: string;
}

export interface SetAuthorized {
  type: AuthType.SET_IS_AUTHORIZED;
  payload: boolean;
}

export type AuthAction = SetToken | SetAuthorized;
