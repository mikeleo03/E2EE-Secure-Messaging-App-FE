import React from 'react';

interface OnlineUsersProps {
  className?: string;
  numUsers: number;
}
const OnlineUsers: React.FC<OnlineUsersProps> = ({ className, numUsers }) => {
  return (
    <div className="flex w-full bg-primaryOrange justify-center items-center">
      <svg height="50" width="60">
        <circle
          cx="25"
          cy="25"
          r="24"
          stroke="#C6DD68"
          strokeWidth="2.5"
          fill="#C6DD68"
        />
        <text
          className={`font-magilio text-subHeading ${className}`}
          x="42%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
        >
          {numUsers}
        </text>
      </svg>
      <h1 className={`font-magilio text-subHeading my-3.5 ${className}`}>
        Users Online
      </h1>
    </div>
  );
};

export default OnlineUsers;
