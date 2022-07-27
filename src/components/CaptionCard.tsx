import React from 'react';

interface CaptionCardProps {
  text?: string;
  className?: string;
}

const CaptionCard: React.FC<CaptionCardProps> = ({ text, className }) => {
  return (
    <div>
      <div
        className={`bg-white h-[46px] w-[402px] text-black rounded-lg mb-2 mr-4  ${className}`}
      >
        {text}
      </div>
    </div>
  );
};

export default CaptionCard;
