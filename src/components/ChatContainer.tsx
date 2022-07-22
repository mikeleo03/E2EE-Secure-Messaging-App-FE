/* eslint-disable max-len */
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const ChatContainer: React.FC = () => {
  return (
    <div className="bg-white h-[650px] w-[777px] rounded-[15px]">
      <div className="h-[95%] w-[100%] rounded-t-[15px]"></div>
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
