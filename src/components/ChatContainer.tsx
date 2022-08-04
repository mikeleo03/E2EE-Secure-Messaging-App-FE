/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { ChatData } from '../interfaces/chat';
import socket from '../socket';
import ChatBubble from './ChatBubble';
import Dialogist from './Dialogist';

interface ChatContainerProps {
  myName?: string;
  myNIM?: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ myName, myNIM }) => {
  const [message, setMessage] = useState('');
  const [chatData, setChatData] = useState<ChatData[]>([]);

  useEffect(() => {
    socket.on('message', ({ content, from }) => {
      console.log(chatData);
      setChatData((prevData) => [
        ...prevData,
        { message: content, isFromMe: socket.id === from },
      ]);
    });
  }, []);

  const sendMessage = () => {
    if (message !== '') {
      socket.emit('message', { content: message });
      setMessage('');
    }
  };

  return (
    <div className="bg-white h-[100%] w-[777px] lg:w-[450px] xl:w-[500px] xxl:w-[600px] 3xl:w-[750px] rounded-[15px]">
      <div className="h-[15%] lg:hidden">
        <Dialogist
          name={'Rocket Racoon'}
          reveal={false}
          setReveal={() => null}
        />
      </div>
      <div className="xs:h-[65%] lg:h-[80%] w-[100%] rounded-t-[15px] flex flex-col max-w-[100%] px-2 pt-2 overflow-y-scroll overflow-x-hidden">
        {chatData.map((chat, idx) => (
          <ChatBubble key={idx} sent={chat.isFromMe}>
            {chat.message}
          </ChatBubble>
        ))}
      </div>
      <div className="h-[20%] bg-white border-solid border-t-2 border-primaryOrange flex justify-between items-center px-8 rounded-b-[15px]">
        <textarea
          placeholder="Enter a message"
          className="resize-none outline-none w-[100%] h-[80%] mr-10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div
          className="bg-primaryOrange h-[51px] w-[51px] min-w-[51px] rounded-full flex justify-center items-center text-[30px] text-white"
          onClick={sendMessage}
        >
          <AiOutlineSend />
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
