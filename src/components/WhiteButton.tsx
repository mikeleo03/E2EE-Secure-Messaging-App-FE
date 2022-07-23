import React from 'react';

interface WhiteButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  Icon?: JSX.Element;
  color?: string;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({
  children,
  className,
  onClick,
  Icon,
  color = 'orange',
}) => {
  return (
    <div
      onClick={onClick}
      // eslint-disable-next-line max-len
      className={`font-alegreya bg-white w-[281px] h-[47px] text-subHeading ${
        color === 'orange' ? 'text-secondaryOrange' : 'text-secondaryRed'
      } flex justify-center items-center rounded-[15px] cursor-pointer ${className}`}
    >
      <span>{Icon}</span> {children}
    </div>
  );
};

export default WhiteButton;
