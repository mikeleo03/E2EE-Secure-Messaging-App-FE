export interface CommonState {
  is_loading?: boolean;
}

export enum CommonType {
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface SetCommon {
  type: CommonType.SET_IS_LOADING;
  payload: boolean;
}

export type CommonAction = SetCommon;
