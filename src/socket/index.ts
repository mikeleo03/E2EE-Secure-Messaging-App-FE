import { io, Socket } from 'socket.io-client';
import config from '../config';
import { ClientToServerEvents, ServerToClientEvents } from './interface';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  config.API_URL,
  {
    autoConnect: false,
  }
);

export default socket;
