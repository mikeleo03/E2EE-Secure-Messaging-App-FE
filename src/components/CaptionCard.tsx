import React from 'react';

interface CaptionCardProps {
  text?: string;
  className?: string;
}

const CaptionCard: React.FC<CaptionCardProps> = ({ text, className }) => {
  return (
    <div>
      <div
        className={`bg-white w-[402px] text-black rounded-lg mb-2 mr-4 font-alegreyasans xs:text-body 
        md:text-subHeading flex items-center px-10 xs:w-[280px] md:w-[700px]`}
      >
        {text}
      </div>
    </div>
  );
};

export default CaptionCard;
