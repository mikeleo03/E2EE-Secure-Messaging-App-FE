import { motion } from 'framer-motion';
import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { classNames } from '../utils/classNames';
import ProfilePicture from './ProfilePicture';

interface HistoryChatProps {
  show: boolean;
  backCallback: () => void;
}

const HistoryChat: React.FC<HistoryChatProps> = ({ show, backCallback }) => {
  return (
    <div className="lg:flex-1 lg:bg-ternaryOrange lg:rounded-t-2xl lg:-ml-4 lg:relative">
      <motion.div
        className="absolute inset-0 bg-primaryBlue px-4 xs:px-8 pb-9 lg:p-0"
        animate={{
          transform: `translateY(${show ? '0%' : '100%'})`,
        }}
        initial={{ transform: 'translateY(100%)' }}
        transition={{ type: 'keyframes' }}
      >
        <div className="bg-white rounded-b-2xl lg:rounded-none h-full w-full">
          <div className="bg-secondaryOrange relative py-3 px-4 flex items-center lg:h-[92px]">
            <button className="mr-4" onClick={backCallback}>
              <FiChevronLeft
                strokeWidth={3}
                className="flex-shrink-0 w-6 sm:w-8"
                size={32}
              />
            </button>
            <ProfilePicture className="w-10 xs:w-[67px] mr-5" />
            <h3 className="font-alegreya text-body xs:text-subHeading m-0">
              Nama Samaran
            </h3>
          </div>
          <div className="flex flex-col overflow-y-auto max-h-[calc(100%-95px)] py-4 px-3.5 gap-2">
            <BubbleChat />
            <BubbleChat className="mb-2" />
            <BubbleChat isMe />
            <BubbleChat isMe />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface BubbleChatProps {
  isMe?: boolean;
  className?: string;
}

const BubbleChat: React.FC<BubbleChatProps> = ({ isMe = false, className }) => {
  return (
    <div className={classNames('w-full flex', isMe && 'justify-end')}>
      <div
        className={classNames(
          'w-full max-w-[60%] rounded-2xl px-4 py-1 md:py-2',
          isMe ? 'text-right bg-secondaryGrey' : 'bg-primaryGrey',
          className
        )}
      >
        &nbsp;
      </div>
    </div>
  );
};

export default HistoryChat;
