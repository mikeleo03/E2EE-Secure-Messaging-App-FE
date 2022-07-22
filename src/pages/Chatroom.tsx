import React from 'react';
import ChatContainer from '../components/ChatContainer';
import Dialogist from '../components/Dialogist';
import Heading from '../components/Heading';
import Nametag from '../components/Nametag';
import OrangeButton from '../components/OrangeButton';

const ChatRoom: React.FC = () => {
  return (
    <div className="bg-primaryBlue w-[100vw] h-[100vh]">
      <Heading className="text-center">Chat Room</Heading>
      {/* <Nametag name="Haikal Lazuardi Fadil" nim="13519027" /> */}
      <div className="flex px-60 justify-between">
        <div className="flex flex-col items-center">
          <Dialogist name="Rafi Raihansyah" />
          <OrangeButton className="my-[35px]">Find New Chats</OrangeButton>
          <OrangeButton>End Chat</OrangeButton>
        </div>
        <ChatContainer />
      </div>
    </div>
  );
};

export default ChatRoom;
