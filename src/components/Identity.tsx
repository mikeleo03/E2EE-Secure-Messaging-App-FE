/* eslint-disable max-len */
import React from 'react';
import ProfilePicture from './ProfilePicture';

interface IdentityProps {
  name: string;
  nim: string;
  className?: string;
}

const Identity: React.FC<IdentityProps> = ({ name, nim, className }) => {
  return (
    <div className={`flex flex-col w-[310px] justify-between items-center pr-8 pl-5 py-3.5 ${className}`}>
      <ProfilePicture />
      <div className={`font-magilio text-heading`}>elcom!</div>
      <div className={`font-alegreya text-subHeading`}>{name}</div>
      <div className={`font-alegreyasans text-subHeading`}>{nim}</div>
    </div>
  );
};

export default Identity;
