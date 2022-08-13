import React, { MouseEventHandler } from 'react';

interface OrangeButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`font-alegreya bg-secondaryOrange xs:w-[90%] lg:w-[281px] xs:h-[25px] lg:h-[47px] xs:my-6 lg:mt-0 
      xs:text-body lg:text-subHeading text-white flex justify-center items-center rounded-[15px] 
      cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default OrangeButton;
