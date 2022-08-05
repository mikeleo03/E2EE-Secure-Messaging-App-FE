/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ChatContainer from '../components/ChatContainer';
import Dialogist from '../components/Dialogist';
import Heading from '../components/Heading';
import Nametag from '../components/Nametag';
import OrangeButton from '../components/OrangeButton';
import ReportModal from '../components/ReportModal';
import { ChatData } from '../interfaces/chat';
import { authSelector } from '../redux/selectors/auth';
import { trimString } from '../utils';

const myNIM = '13519027';
const myName = 'Haikal Lazuardi Fadil';
const dialogist = 'Rafi Raihansyah';

const ChatRoom: React.FC = () => {
  const [reveal, setReveal] = useState<boolean>(false);
  const { userData } = useSelector(authSelector);

  return (
    <>
      <ReportModal />
      <div className="bg-primaryBlue w-[100vw] xs:h-[100vh] sm:h-[100vh] xs:px-10 sm:px-32 md:px-48 lg:px-20 xl:px-28 xxl:px-36 3xl:px-60 overflow-hidden">
        <div className="grid grid-flow-col justify-items-stretch grid-cols-8 items-center xs:py-4 lg:pt-10 lg:pb-4">
          <Heading className="justify-self-center col-span-6 xs:hidden lg:block">
            Chat Room
          </Heading>
          <Nametag
            name={trimString(userData?.name)}
            nim={userData?.username}
            className="xs:justify-self-center lg:justify-self-end xs:col-span-8 lg:col-span-2"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-around xs:hidden lg:flex">
            <Dialogist
              name={reveal ? dialogist : 'Rocket Racoon'}
              reveal={reveal}
              setReveal={setReveal}
            />
            <div className="mt-6">
              <OrangeButton>End Chat</OrangeButton>
            </div>
          </div>
          <ChatContainer myNIM={myNIM} myName={myName} />
        </div>
        <div className="w-[100%] flex justify-center lg:hidden">
          <OrangeButton>End Chat</OrangeButton>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
