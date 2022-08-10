/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import ChatContainer from '../components/ChatContainer';
import ChatEnded from '../components/ChatEnded';
import Dialogist from '../components/Dialogist';
import Heading from '../components/Heading';
import Nametag from '../components/Nametag';
import OrangeButton from '../components/OrangeButton';
import ReportModal from '../components/ReportModal';
import { setRoomId } from '../redux/actions/room';
import { authSelector } from '../redux/selectors/auth';
import { roomSelector } from '../redux/selectors/room';
import socket from '../socket';
import { trimString } from '../utils';

const ChatRoom: React.FC = () => {
  const [dialogist, setDialogist] = useState('');
  const { userData } = useSelector(authSelector);
  const { room_id } = useSelector(roomSelector);
  const [chatEnded, setChatEnded] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clearRoomId = () => {
    dispatch(setRoomId(null));
  };

  useEffect(() => {
    if (!room_id) {
      navigate('/', { replace: true });
    }
    socket.on('revealName', ({ username1, name1, username2, name2 }) => {
      if (username1 === userData?.username) {
        setDialogist(name2);
      }
      if (username2 === userData?.username) {
        setDialogist(name1);
      }
    });

    socket.on('endChat', (msg) => {
      setChatEnded(msg);
      clearRoomId();
    });

    return () => clearRoomId();
  }, []);

  const handleEndChat = () => {
    socket.emit('endChat');
    navigate('/', { replace: true });
  };

  const handleReveal = () => {
    socket.emit('revealName');
  };

  return (
    <>
      <ReportModal />
      {chatEnded ? (
        <ChatEnded msg={chatEnded} />
      ) : (
        <>
          <div className="bg-primaryBlue w-[100vw] xs:h-[100vh] sm:h-[100vh] xs:px-10 sm:px-32 md:px-48 lg:px-20 xl:px-28 xxl:px-36 3xl:px-60 overflow-hidden">
            <div className="grid grid-flow-col justify-items-stretch grid-cols-8 items-center xs:py-4 lg:pt-10 lg:pb-4">
              <Heading className="justify-self-center col-span-6 xs:hidden lg:block">
                Chat Room
              </Heading>
              <Nametag
                name={userData?.name}
                nim={userData?.username}
                className="xs:justify-self-center lg:justify-self-end xs:col-span-8 lg:col-span-2"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-center justify-around xs:hidden lg:flex">
                <Dialogist dialogist={dialogist} handleReveal={handleReveal} />
                <div className="mt-6">
                  <OrangeButton>End Chat</OrangeButton>
                </div>
              </div>
              <ChatContainer
                myNIM={userData?.username}
                myName={userData?.name}
                dialogist={dialogist}
                handleReveal={handleReveal}
              />
            </div>
            <div className="w-[100%] flex justify-center lg:hidden">
              <OrangeButton onClick={handleEndChat}>End Chat</OrangeButton>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChatRoom;
