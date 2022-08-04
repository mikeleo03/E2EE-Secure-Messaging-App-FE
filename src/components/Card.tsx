import React from 'react';

interface CardProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  selected: boolean;
}

const Card: React.FC<CardProps> = ({ text, link, selected, onClick }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`bg-primaryGreen h-[100px] w-[226px] text-white rounded-lg mb-2 ${
          selected ? 'border-2 border-quarternaryOrange' : ''
        } `}
      >
        {link}
      </div>
      <div
        className={`bg-primaryGreen h-[37px] w-[226px] text-white rounded-lg ${
          selected ? 'border-2 border-quarternaryOrange' : ''
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Card;
