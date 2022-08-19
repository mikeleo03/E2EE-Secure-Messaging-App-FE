/* eslint-disable max-len */
import React from 'react';
import { trimString } from '../utils';
import ProfilePicture from './ProfilePicture';

interface NameTagProps {
  name?: string;
  nim?: string;
  className?: string;
}

const Nametag: React.FC<NameTagProps> = ({ name, nim, className }) => {
  return (
    <div
      className={`flex w-[162px] md:w-[310px] h-[46px] md:h-[100px] bg-secondaryBlue justify-between items-center rounded-2xl px-2.5 md:pr-8 md:pl-5 py-1.5 md:py-3.5 gap-1 ${className}`}
    >
      <ProfilePicture className="w-[33px] md:w-[71px]" />
      <div className="w-full text-center">
        <div className="text-white flex flex-col justify-center items-center font-alegreya font-bold text-xs md:text-subHeading mb-[5px]">
          {trimString(name)}
        </div>
        <div className="text-white flex flex-col justify-center items-center font-alegreyasans text-xs md:text-body font-light">
          {nim}
        </div>
      </div>
    </div>
  );
};

export default Nametag;
