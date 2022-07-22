/* eslint-disable max-len */
import React from 'react';

interface ChatBubbleProps {
  children: React.ReactNode;
  sent: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ children, sent }) => {
  return (
    <div
      className={`relative max-w-[255px] mb-[15px] px-[20px] py-[10px] leading-[24px] break-words rounded-[25px] before:w-[20px] before:absolute before:bottom-0 before:h-[25px] before:content-[''] after:w-[26px] after:absolute after:bottom-0 after:h-[25px] after:content-[''] ${
        sent
          ? 'bg-primaryOrange self-start before:-left-[7px] before:rounded-bl-[16px 14px] after:-left-[26px] rounded-bl-[10px]'
          : 'bg-secondaryGrey self-end before:-right-[7px] before:rounded-br-[16px 14px] after:-right-[26px] rounded-br-[10px]'
      }`}
    >
      {children}
    </div>
  );
};

export default ChatBubble;
