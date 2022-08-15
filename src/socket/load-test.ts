import { io, Socket } from 'socket.io-client';
import config from '../config';
import { ClientToServerEvents, ServerToClientEvents } from './interface';
import topicData from '../utils/topics';

const MAX_CLIENTS = 100;
const CLIENT_CREATION_INTERVAL_IN_MS = 10;
const EMIT_INTERVAL_IN_MS = 100;
const MATCH_MAKING_TIMEOUT = 10000;
const SOCKET_LIFETIME = 20000;
const PRINT_REPORT_INTERVAL = 1000;

let clientCount = 0;
let lastReport = new Date().getTime();
let packetsSinceLastReport = 0;
let totalPackets = 0;
let failPacketsSinceLastReport = 0;
let totalFailPackets = 0;
let failMatch = 0;
let matchedClient = 0;

const msgBucket: any[] = [];
const logger = (...args: any[]) => {
  console.log(...args);
  msgBucket.push(...args);
};

export const printReport = () => {
  const now = new Date().getTime();
  const durationSinceLastReport = (now - lastReport) / 1000;
  const packetsPerSeconds = (
    (totalPackets - packetsSinceLastReport) / durationSinceLastReport
  ).toFixed(2);
  const failPacketsPerSecond = (
    (totalFailPackets - failPacketsSinceLastReport) / durationSinceLastReport
  ).toFixed(2);

  logger(
    `current client count: ${clientCount};
    matched client match count: ${matchedClient}
    failed client match count: ${failMatch};
    total packets: ${totalPackets};
    total fail packets: ${totalFailPackets};
    average packets received per second: ${packetsPerSeconds};
    average packets failed per second: ${failPacketsPerSecond};`
  );

  packetsSinceLastReport = totalPackets;
  failPacketsSinceLastReport = totalFailPackets;
  lastReport = now;
};

export const createSocket = () => {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    config.API_URL,
    {
      autoConnect: false,
      auth: {
        name: Math.random().toString(),
        username: Math.random().toString(),
      },
    }
  );

  return socket;
};

export const testEmit = () => {
  logger('testEmit client count: ' + clientCount);
  const socket1 = createSocket();
  const socket2 = createSocket();

  socket1.connect();
  socket2.connect();

  const topicId = Math.floor(Math.random() * topicData.length) + 1;

  if (!topicId.toString()) {
    throw new Error('UNDEFINED TOPIC ID');
  }

  socket1.emit('matchmaking', topicId.toString());
  socket2.emit('matchmaking', topicId.toString());

  const matchMakingTimeout = setInterval(() => {
    failMatch += 2;

    socket1.emit('matchNotFound', topicId.toString());
    socket1.emit('matchNotFound', topicId.toString());
  }, MATCH_MAKING_TIMEOUT);

  let countConnected = 0;
  const arrIntervalMsg: number[] = [];

  const onMatchFunc = (socket: Socket) => {
    logger('matched');
    matchedClient++;
    countConnected++;

    if (countConnected === 2) {
      clearInterval(matchMakingTimeout);
    }

    const intervalMsg = setInterval(() => {
      socket.emit('message', {
        content: Math.random().toString(),
      });
    }, EMIT_INTERVAL_IN_MS);
    arrIntervalMsg.push(intervalMsg);
  };

  const onMessage = (payload: { content: string; from: string }) => {
    totalPackets++;
    logger('on message', payload);
  };

  const onRevealName = (payload: {
    username1: string;
    name1: string;
    username2: string;
    name2: string;
  }) => {
    logger('on reveal name', payload);
  };

  const onMsgFail = (payload: { error: string }) => {
    logger('on failed msg', payload);
    totalFailPackets++;
  };

  socket1.on('matched', () => onMatchFunc(socket1));
  socket1.on('message', onMessage);
  socket1.on('revealName', onRevealName);
  socket1.on('messageFail', onMsgFail);

  socket2.on('matched', () => onMatchFunc(socket2));
  socket2.on('message', onMessage);
  socket2.on('revealName', onRevealName);
  socket2.on('messageFail', onMsgFail);

  setTimeout(() => {
    logger('REVEAL NAME');

    socket1.emit('revealName');
    socket2.emit('revealName');
  }, SOCKET_LIFETIME / 2);

  setTimeout(() => {
    logger('ENDING CHAT AND SOCKET');

    arrIntervalMsg.forEach((intervalMsg) => {
      clearInterval(intervalMsg);
    });

    socket1.emit('endChat');
    socket2.emit('endChat');

    socket1.disconnect();
    socket2.disconnect();

    clientCount -= 2;
  }, SOCKET_LIFETIME);

  clientCount += 2;
  if (clientCount < MAX_CLIENTS) {
    setTimeout(testEmit, CLIENT_CREATION_INTERVAL_IN_MS);
  }
};

export const loadTest = () => {
  testEmit();
  const printReportInterval = setInterval(() => {
    if (clientCount === 0) {
      clearInterval(printReportInterval);
      console.log(msgBucket);
    }
    printReport();
  }, PRINT_REPORT_INTERVAL);
};

export default loadTest;
