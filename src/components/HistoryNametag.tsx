import React from 'react';
import ProfilePicture from './ProfilePicture';

interface HistoryNametagProps {
  name: string;
  lastChat: {
    message: string;
    time: Date;
  };
}

const HistoryNametag: React.FC<HistoryNametagProps> = ({ name, lastChat }) => {
  return (
    <div className="p-1.5 md:p-2.5 bg-secondaryOrange rounded-2xl flex items-center">
      <div className="bg-white flex py-3 px-[22px] rounded-xl flex-1 items-center">
        <div className="flex-shrink-0">
          <ProfilePicture className="w-[35px] md:w-[55px]" />
        </div>
        <div className="pl-5">
          <p className="m-0 font-alegreya text-body md:text-subHeading">
            {name}
          </p>
          <p className="m-0 font-alegreyasans text-xs md:text-body">
            {lastChat.message}
          </p>
        </div>
      </div>
      <div className="px-7 font-alegreyasans font-light text-body text-white">
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
    </div>
  );
};

export default HistoryNametag;
