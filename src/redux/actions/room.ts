import { RoomAction, RoomType } from '../types/room';

const { SET_ROOM_ID } = RoomType;

export const setRoomId = (value: string | null): RoomAction => {
  return {
    type: SET_ROOM_ID,
    payload: value,
  };
};
