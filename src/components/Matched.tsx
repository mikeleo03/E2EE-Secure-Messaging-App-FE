import React from 'react';
import image from '../resources/image.png';

const Matched: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen">
      <img className="w-[300px] md:w-[421px] mb-5" src={image} />
      <div className="font-magilio text-heading">atched</div>
    </div>
  );
};

export default Matched;
