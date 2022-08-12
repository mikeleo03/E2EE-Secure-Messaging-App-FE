import { CommonAction, CommonType } from '../types/common';

const { SET_IS_LOADING } = CommonType;

export const setIsLoading = (value: boolean): CommonAction => {
  return {
    type: SET_IS_LOADING,
    payload: value,
  };
};
