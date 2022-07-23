import React, { useState } from 'react';
import ChatContainer from '../components/ChatContainer';
import Dialogist from '../components/Dialogist';
import Heading from '../components/Heading';
import Nametag from '../components/Nametag';
import OrangeButton from '../components/OrangeButton';
import ReportModal from '../components/ReportModal';
import { ChatData } from '../interfaces/chat';

const myNIM = '13519027';
const myName = 'Haikal Lazuardi Fadil';
const dialogist = 'Rafi Raihansyah';
const dummyChat: ChatData[] = [
  {
    sender: '13519027',
    receiver: '13519154',
    message: 'tes',
  },
  {
    sender: '13519154',
    receiver: '13519027',
    message: 'tes',
  },
  {
    sender: '13519027',
    receiver: '13519154',
    message: 'tes',
  },
  {
    sender: '13519154',
    receiver: '13519027',
    message: 'tes',
  },
  {
    sender: '13519027',
    receiver: '13519154',
    message: 'tes',
  },
];

const ChatRoom: React.FC = () => {
  const [reveal, setReveal] = useState<boolean>(false);

  return (
    <>
      <ReportModal />
      <div className="bg-primaryBlue w-[100vw] h-[100vh] px-60 relative">
        <Heading className="text-center pt-10">Chat Room</Heading>
        <Nametag
          name="Haikal Lazuardi Fadil"
          nim="13519027"
          className="absolute right-60 top-5"
        />
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <Dialogist
              name={reveal ? dialogist : 'Rocket Racoon'}
              reveal={reveal}
              setReveal={setReveal}
            />
            <OrangeButton className="my-[35px]">Find New Chats</OrangeButton>
            <OrangeButton>End Chat</OrangeButton>
          </div>
          <ChatContainer myNIM={myNIM} myName={myName} chatData={dummyChat} />
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
