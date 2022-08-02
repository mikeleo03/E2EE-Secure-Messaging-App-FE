import React from 'react';
import ProfilePicture from './ProfilePicture';

interface HistoryNametagProps {
  name: string;
  lastChat: {
    message: string;
    time: Date;
  };
  onClick?: () => void;
}

const HistoryNametag: React.FC<HistoryNametagProps> = ({
  name,
  lastChat,
  onClick,
}) => {
  return (
    <button
      className="p-1.5 sm:p-2.5 bg-secondaryOrange rounded-2xl flex items-center"
      onClick={onClick}
    >
      <div className="bg-white flex py-3 px-[22px] rounded-xl flex-1 items-center">
        <div className="flex-shrink-0">
          <ProfilePicture className="w-[35px] sm:w-[55px]" />
        </div>
        <div className="pl-5 text-left">
          <p className="m-0 font-alegreya text-body sm:text-subHeading">
            {name}
          </p>
          <p className="m-0 font-alegreyasans text-xs sm:text-body">
            {lastChat.message}
          </p>
        </div>
      </div>
      <div className="px-2 xs:px-7 font-alegreyasans font-light text-body text-white">
        <p className="m-0">
          {lastChat.time.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
          })}
        </p>
        <p className="m-0">
          {lastChat.time.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </button>
  );
};

export default HistoryNametag;
