import React from 'react';

interface WhiteButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      // eslint-disable-next-line max-len
      className={`bg-white w-[281px] h-[47px] text-subHeading text-secondaryOrange flex justify-center items-center rounded-[15px] cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default WhiteButton;
