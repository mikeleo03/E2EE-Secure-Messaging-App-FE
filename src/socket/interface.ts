export interface ServerToClientEvents {
  matched: () => void;
  revealName: (payload: object) => void;
}

export interface ClientToServerEvents {
  matchmaking: (topicId: string) => void;
  matchNotFound: (topicId: string) => void;
  revealName: () => void;
  dummyMatch: (roomId: string) => void;
}
