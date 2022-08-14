import { HistoryChatData } from '../../interfaces/history';

export enum HistoryType {
  ADD_CHAT = 'ADD_CHAT',
}

export interface HistoryState {
  chats: Record<string, HistoryChatData[]>;
}

export interface AddChat {
  type: HistoryType.ADD_CHAT;
  payload: { chat_id: string; data: HistoryChatData[] };
}

export type HistoryAction = AddChat;
