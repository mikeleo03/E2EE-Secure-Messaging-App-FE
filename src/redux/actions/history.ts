import { HistoryChatData } from '../../interfaces/history';
import { HistoryType } from '../types/history';

export const addChat = (chat_id: string, chats: HistoryChatData[]) => {
  return {
    type: HistoryType.ADD_CHAT,
    payload: { chat_id, data: chats },
  };
};
