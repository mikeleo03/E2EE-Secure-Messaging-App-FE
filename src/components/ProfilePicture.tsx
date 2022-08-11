/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/selectors/auth';
import MaleAvatar from '../assets/profile/MaleAvatar.png';
import FemaleAvatar from '../assets/profile/FemaleAvatar.png';
import UnknownAvatar from '../assets/profile/UnknownAvatar.png';

interface ProfilePictureProps {
  className?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ className }) => {
  const { userData } = useSelector(authSelector);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        width={100}
        className={`${className} rounded-full`}
        src={
          userData?.sex === 'Male'
            ? MaleAvatar
            : userData?.sex === 'Female'
            ? FemaleAvatar
            : UnknownAvatar
        }
      />
    </div>
  );
};

export default ProfilePicture;
