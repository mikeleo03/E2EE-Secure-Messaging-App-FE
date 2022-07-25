import React from 'react';
import profile from '../resources/Avatar.png'

interface ProfilePictureProps {
  className?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ className }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <img 
        width={100}
        className={`${className}`} 
        src={profile}
      />
    </div>
  );
};

export default ProfilePicture;
