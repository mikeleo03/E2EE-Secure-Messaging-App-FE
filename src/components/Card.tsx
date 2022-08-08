import React from 'react';

interface CardProps {
  text?: string;
  hot?: boolean;
  link?: string;
  onClick?: () => void;
  selected: boolean;
  Icon?: JSX.Element;
}

const Card: React.FC<CardProps> = ({
  text,
  hot,
  link,
  selected,
  onClick,
  Icon,
}) => {
  return (
    <div onClick={onClick} className="relative">
      <div
        className={`bg-primaryGreen ${
          text === 'New Topic' ? 'h-[145px]' : 'h-[100px]'
        } w-[226px] text-white rounded-lg mb-2 ${
          selected ? 'border-2 border-quarternaryOrange' : ''
        } `}
      >
        {Icon && (
          <div className="text-[100px] h-full flex justify-center items-center">
            {Icon}
          </div>
        )}
      </div>
      {text !== 'New Topic' ? (
        <div
          className={`bg-primaryGreen h-[37px] w-[226px] text-white rounded-lg flex justify-center items-center ${
            selected ? 'border-2 border-quarternaryOrange' : ''
          }`}
        >
          {text}
        </div>
      ) : (
        <></>
      )}

      {hot ? (
        <div
          className="bg-secondaryRed text-white h-[40px] w-[40px] rounded-full flex items-center justify-center
         absolute top-0 right-0 opacity-80 font-alegreya tracking-widest"
        >
          Hot
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card;
