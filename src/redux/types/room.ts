export interface RoomState {
  room_id?: string | null;
}

export enum RoomType {
  SET_ROOM_ID = 'SET_ROOM_ID',
}

export interface SetRoom {
  type: RoomType.SET_ROOM_ID;
  payload: string | null;
}

export type RoomAction = SetRoom;
