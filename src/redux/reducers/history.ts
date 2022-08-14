/* eslint-disable indent */
import { HistoryAction, HistoryState, HistoryType } from '../types/history';

const history = (
  state: HistoryState = { chats: {} },
  action: HistoryAction
): HistoryState => {
  const { type } = action;

  switch (type) {
    case HistoryType.ADD_CHAT:
      return {
        chats: {
          ...state.chats,
          [action.payload.chat_id]: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default history;
