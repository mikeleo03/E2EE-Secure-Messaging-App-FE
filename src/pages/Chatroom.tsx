import React from 'react';
import Heading from '../components/Heading';
import Nametag from '../components/Nametag';

const Chatroom: React.FC = () => {
  return (
    <>
      <Heading className="text-center">Chat Room</Heading>
      <Nametag nama="Haikal Lazuardi Fadil" nim="13519027" />
    </>
  );
};

export default Chatroom;
