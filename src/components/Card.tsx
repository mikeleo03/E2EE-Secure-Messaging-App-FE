import React from 'react';

interface CardProps {
  text?: string;
  src?: string;
  dropShadow?: string;
  hot?: boolean;
  link?: string;
  onClick?: () => void;
  selected: boolean;
  Icon?: JSX.Element;
}

const Card: React.FC<CardProps> = ({
  text,
  src,
  dropShadow,
  hot,
  selected,
  onClick,
  Icon,
}) => {
  return (
    <div onClick={onClick} className="relative cursor-pointer">
      <img
        src={src}
        alt={text}
        style={{
          filter: `drop-shadow(0px 4px 0px ${dropShadow})`,
        }}
        className="w-[226px] text-white rounded-lg mb-2 object-contain"
      >
        {Icon && (
          <div className="text-[100px] h-full flex justify-center items-center">
            {Icon}
          </div>
        )}
      </img>
      <div
        className={`${
          selected ? 'block' : 'hidden'
        } absolute h-[107px] w-full bg-primaryGrey z-10 top-0 left-0 opacity-70 rounded-lg`}
      />
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
