/* eslint-disable max-len */
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { ChatData } from '../interfaces/chat';
import ChatBubble from './ChatBubble';

interface ChatContainerProps {
  myName?: string;
  myNIM?: string;
  chatData: ChatData[];
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  myName,
  myNIM,
  chatData,
}) => {
  return (
    <div className="bg-white h-[650px] w-[777px] lg:w-[450px] xl:w-[500px] xxl:w-[600px] 3xl:w-[777px] rounded-[15px]">
      <div className="h-[95%] w-[100%] rounded-t-[15px] flex flex-col max-w-[100%] px-2 pt-2 ">
        {chatData.map((chat, idx) => (
          <ChatBubble key={idx} sent={myNIM === chat.sender ? true : false}>
            {chat.message}
          </ChatBubble>
        ))}
      </div>
      <div className="h-[113px] bg-white border-solid border-t-2 border-primaryOrange flex justify-between items-center px-8  rounded-b-[15px]">
        <textarea
          placeholder="Enter a message"
          className="resize-none outline-none w-[100%] h-[100%] py-5 mr-10"
        />

        <div className="bg-primaryOrange h-[51px] w-[51px] min-w-[51px] rounded-full flex justify-center items-center text-[30px] text-white">
          <AiOutlineSend />
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
