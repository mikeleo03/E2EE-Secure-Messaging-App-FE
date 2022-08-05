import React from 'react';

interface CardProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  selected: boolean;
  Icon?: JSX.Element;
}

const Card: React.FC<CardProps> = ({ text, link, selected, onClick, Icon }) => {
  return (
    <div onClick={onClick}>
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
    </div>
  );
};

export default Card;
