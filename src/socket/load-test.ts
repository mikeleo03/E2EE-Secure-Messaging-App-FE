import { io, Socket } from 'socket.io-client';
import config from '../config';
import { ClientToServerEvents, ServerToClientEvents } from './interface';
import topicData from '../utils/topics';

const MAX_CLIENTS = 500;
const CLIENT_CREATION_INTERVAL_IN_MS = 10;
const EMIT_INTERVAL_IN_MS = 1000;
const MATCH_MAKING_TIMEOUT = 20000;
const SOCKET_LIFETIME = 30000;
const PRINT_REPORT_INTERVAL = 1000;

let clientCount = 0;
let lastReport = new Date().getTime();
let packetsSinceLastReport = 0;
let totalPackets = 0;
let failPacketsSinceLastReport = 0;
let totalFailPackets = 0;
let failMatch = 0;
let matchedClient = 0;
const latencyTimer = {
  sum: 0,
  count: 0,
};
const extremeLatency = {
  max: 0,
  min: Number.MAX_VALUE,
};
const latencyMatching = {
  sum: 0,
  count: 0,
};
const extremeLatencyMatching = {
  max: 0,
  min: Number.MAX_VALUE,
};
const latencyMsg = {
  sum: 0,
  count: 0,
};
const extremeLatencyMsg = {
  max: 0,
  min: Number.MAX_VALUE,
};

const msgBucket: any[] = [];
const logger = (...args: any[]) => {
  console.log(...args);
  msgBucket.push(...args);
};

export const printReport = () => {
  const now = new Date().getTime();
  const durationSinceLastReport = (now - lastReport) / 1000;
  const packetsPerSeconds = (
    (totalPackets - packetsSinceLastReport) /
    durationSinceLastReport
  ).toFixed(2);
  const failPacketsPerSecond = (
    (totalFailPackets - failPacketsSinceLastReport) /
    durationSinceLastReport
  ).toFixed(2);

  logger(
    `current client count: ${clientCount};
    matched client match count: ${matchedClient}
    failed client match count: ${failMatch};
    total packets: ${totalPackets};
    total fail packets: ${totalFailPackets};
    duration test: ${durationSinceLastReport} seconds;
    current average packets received this second: ${packetsPerSeconds};
    current average packets failed this second: ${failPacketsPerSecond};
    average latency connection to matched: ${(
      latencyTimer.sum / latencyTimer.count
    ).toFixed(2)} ms;
    max latency connection to matched: ${extremeLatency.max} ms;
    min latency connection to matched: ${extremeLatency.min} ms;
    average latency matchmaking to matched matching: ${(
      latencyMatching.sum / latencyMatching.count
    ).toFixed(2)} ms;
    max latency matchmaking to matched matching: ${
      extremeLatencyMatching.max
    } ms;
    min latency matchmaking to matched matching: ${
      extremeLatencyMatching.min
    } ms;
    average latency first emit message to first get message: ${(
      latencyMsg.sum / latencyMsg.count
    ).toFixed(2)} ms;
    max latency first emit message to first get message: ${
      extremeLatencyMsg.max
    } ms;
    min latency first emit message to first get message: ${
      extremeLatencyMsg.min
    } ms;`
  );

  packetsSinceLastReport = totalPackets;
  failPacketsSinceLastReport = totalFailPackets;
  lastReport = now;
};

export const createSocket = () => {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    'https://pre-samitra-api.adiutor.katitb22.com',
    {
      autoConnect: false,
      auth: {
        name: Math.random().toString(),
        username: Math.random().toString(),
      },
      transports: ['websocket'],
    }
  );

  return socket;
};

export const testEmit = () => {
  logger('testEmit client count: ' + clientCount);
  const socket1 = createSocket();
  const socket2 = createSocket();

  const localLatencyMsg: {
    before: number | null;
    after: number | null;
  } = {
    before: null,
    after: null,
  };

  const timeBeforeConnection = new Date().getTime();
  socket1.connect();
  socket2.connect();

  const topicId = Math.floor(Math.random() * topicData.length) + 1;

  if (!topicId.toString()) {
    throw new Error('UNDEFINED TOPIC ID');
  }

  socket1.emit('matchmaking', topicId.toString());
  socket2.emit('matchmaking', topicId.toString());
  const timeMatchMaking = new Date().getTime();

  const matchMakingTimeout = setTimeout(() => {
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
      const timeAfterBothMatched = new Date().getTime();

      const latency = timeAfterBothMatched - timeBeforeConnection;
      latencyTimer.sum += latency;
      latencyTimer.count++;

      if (latency > extremeLatency.max) {
        extremeLatency.max = latency;
      }
      if (latency < extremeLatency.min) {
        extremeLatency.min = latency;
      }

      const latencyMatchingTime = timeAfterBothMatched - timeMatchMaking;
      latencyMatching.sum += latencyMatchingTime;
      latencyMatching.count++;

      if (latencyMatchingTime > extremeLatencyMatching.max) {
        extremeLatencyMatching.max = latencyMatchingTime;
      }
      if (latencyMatchingTime < extremeLatencyMatching.min) {
        extremeLatencyMatching.min = latencyMatchingTime;
      }

      clearTimeout(matchMakingTimeout);
    }

    const intervalMsg = setInterval(() => {
      socket.emit('message', {
        content: Math.random().toString(),
      });
      if (!localLatencyMsg.before) {
        localLatencyMsg.before = new Date().getTime();
      }
    }, EMIT_INTERVAL_IN_MS);
    arrIntervalMsg.push(intervalMsg);
  };

  const onMessage = (payload: { content: string; from: string }) => {
    totalPackets++;
    logger('on message', payload);
    if (!localLatencyMsg.after && localLatencyMsg.before) {
      localLatencyMsg.after = new Date().getTime();

      const latency = localLatencyMsg.after - localLatencyMsg.before;
      latencyMsg.sum += latency;
      latencyMsg.count++;

      if (latency > extremeLatencyMsg.max) {
        extremeLatencyMsg.max = latency;
      }
      if (latency < extremeLatencyMsg.min) {
        extremeLatencyMsg.min = latency;
      }
    }
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
