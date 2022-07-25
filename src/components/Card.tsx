import React from 'react';

interface CardProps {
  text?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ text, link }) => {
  return (
    <div>
      <div className="bg-primaryGreen h-[100px] w-[226px] text-white rounded-lg mb-2">{link}</div>
      <div className="bg-primaryGreen h-[37px] w-[226px] text-white rounded-lg">{text}</div>
    </div>
  );
};

export default Card;
