import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-primaryBlue">
      <div
        className="border-[16px] border-secondaryGray border-t-[16px] border-t-primaryBlue rounded-[50%] 
        h-[120px] w-[120px] animate-spin"
      ></div>
    </div>
  );
};

export default Loading;
