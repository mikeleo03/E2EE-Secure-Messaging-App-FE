/* eslint-disable max-len */
import React from 'react';

interface NameTagProps {
  name: string;
  nim: string;
  className?: string;
}

const Nametag: React.FC<NameTagProps> = ({ name, nim, className }) => {
  return (
    <div
      className={`flex w-[310px] h-[100px] bg-secondaryBlue justify-between items-center rounded-2xl pr-8 pl-5 py-3.5 ${className}`}
    >
      <div className="min-w-[71px] h-[71px] w-[71px] rounded-full bg-black"></div>
      <div className="w-full">
        <div className="text-white flex flex-col justify-center items-center">
          {name}
        </div>
        <div className="text-white flex flex-col justify-center items-center">
          {nim}
        </div>
      </div>
    </div>
  );
};

export default Nametag;
