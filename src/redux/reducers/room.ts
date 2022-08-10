/* eslint-disable indent */
import { RoomAction, RoomState, RoomType } from '../types/room';

const initialState: RoomState = {
  room_id: null,
};

const { SET_ROOM_ID } = RoomType;

const room = (
  state: RoomState = initialState,
  action: RoomAction
): RoomState => {
  const { type } = action;

  const setRoomId = (): RoomState => {
    const { payload: room_id } = action;
    return {
      ...state,
      room_id,
    };
  };

  switch (type) {
    case SET_ROOM_ID:
      return setRoomId();
    default:
      return state;
  }
};

export default room;
