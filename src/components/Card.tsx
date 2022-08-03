import React from 'react';

interface CardProps {
  text?: string;
  link?: string;
  clicked: boolean;
}

const Card: React.FC<CardProps> = ({ text, link, clicked }) => {
  return (
    <div>
      <div
        className={`bg-primaryGreen h-[100px] w-[226px] text-white rounded-lg mb-2 ${
          clicked ? 'border-2 border-quarternaryOrange' : ''
        } `}
      >
        {link}
      </div>
      <div
        className={`bg-primaryGreen h-[37px] w-[226px] text-white rounded-lg ${
          clicked ? 'border-2 border-quarternaryOrange' : ''
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Card;
