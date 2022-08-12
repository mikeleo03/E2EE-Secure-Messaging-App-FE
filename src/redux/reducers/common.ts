/* eslint-disable indent */
import { CommonAction, CommonState, CommonType } from '../types/common';

const initialState: CommonState = {
  is_loading: true,
};

const { SET_IS_LOADING } = CommonType;

const common = (
  state: CommonState = initialState,
  action: CommonAction
): CommonState => {
  const { type } = action;

  const setIsLoading = (): CommonState => {
    const { payload: is_loading } = action;
    return {
      ...state,
      is_loading,
    };
  };

  switch (type) {
    case SET_IS_LOADING:
      return setIsLoading();
    default:
      return state;
  }
};

export default common;
