import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { HistoryChatData } from '../interfaces/history';
import { addChat } from '../redux/actions/history';
import { authSelector } from '../redux/selectors/auth';
import { historySelector } from '../redux/selectors/history';
import { getOneHistory } from '../services/history-services';
import { classNames } from '../utils/classNames';
import ProfilePicture from './ProfilePicture';

export interface HistoryData {
  chat_id: string;
  message: string;
  timestamp: string;
  topic_id: 2;
  topic_name: string;
}

interface HistoryChatProps {
  history: HistoryData | null;
  backCallback: () => void;
}

const HistoryChat: React.FC<HistoryChatProps> = ({ history, backCallback }) => {
  const show = history !== null;
  const { userData } = useSelector(authSelector);
  const { chats: chatsStore } = useSelector(historySelector);
  const [chats, setChats] = useState<Array<HistoryChatData>>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData?.username && history) {
      const chatStored = chatsStore[history.chat_id];
      if (chatStored) {
        setChats(chatStored);
      } else {
        setChats([]);
        getOneHistory(userData.username, history.chat_id)
          .then((data) => {
            data.reverse();
            setChats(data);
            dispatch(addChat(history.chat_id, data));
          })
          .catch(console.log);
      }
    }
  }, [userData?.username, history]);

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
              {history?.topic_name}
            </h3>
          </div>
          <div className="flex flex-col-reverse overflow-y-auto max-h-[calc(100%-95px)] py-4 px-3.5 gap-2">
            {chats.map((chat, idx) => {
              const isMe = chat.sender_id === userData?.username;
              const afterIsMe =
                chats[idx + 1]?.sender_id === userData?.username;
              return (
                <BubbleChat
                  message={chat.message}
                  key={chat.message_id}
                  isMe={isMe}
                  className={afterIsMe !== isMe ? 'mb-2' : ''}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface BubbleChatProps {
  isMe?: boolean;
  className?: string;
  message: string;
}

const BubbleChat: React.FC<BubbleChatProps> = ({
  isMe = false,
  className,
  message,
}) => {
  return (
    <div className={classNames('w-full flex', isMe && 'justify-end')}>
      <div
        className={classNames(
          'max-w-[60%] rounded-2xl px-4 py-1 md:py-2 text-body',
          isMe ? 'text-right bg-secondaryGrey' : 'bg-primaryGrey text-white',
          className
        )}
      >
        {message}
      </div>
    </div>
  );
};

export default HistoryChat;
