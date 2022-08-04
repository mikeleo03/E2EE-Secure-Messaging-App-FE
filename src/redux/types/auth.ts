import { UserData } from '../../interfaces/auth';

export enum AuthType {
  SET_TOKEN = 'SET_TOKEN',
  SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED',
  SET_USERDATA = 'SET_USERDATA',
  SET_TOPIC = 'SET_TOPIC',
}

export interface AuthState {
  token: string;
  isAuthorized: boolean;
  userData: UserData | null;
  topic: number;
}

export interface SetToken {
  type: AuthType.SET_TOKEN;
  payload: string;
}

export interface SetAuthorized {
  type: AuthType.SET_IS_AUTHORIZED;
  payload: boolean;
}

export interface SetUserData {
  type: AuthType.SET_USERDATA;
  payload: UserData;
}

export interface SetTopic {
  type: AuthType.SET_TOPIC;
  payload: number;
}

export type AuthAction = SetToken | SetAuthorized | SetUserData | SetTopic;
