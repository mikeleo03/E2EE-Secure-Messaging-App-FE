import React from 'react';

interface OrangeButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      // eslint-disable-next-line max-len
      className={`bg-secondaryOrange w-[281px] h-[47px] text-subHeading text-white flex justify-center items-center rounded-[15px] cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default OrangeButton;
