import React from 'react';
import CarouselCard from './CarouselCard';

interface TopicsProps {
  className?: string;
}

const Topics: React.FC<TopicsProps> = ({ className }) => {
  return (
    <div className='bg-primaryBlue rounded-[20px] my-10'>
      <div className={`bg-primaryRed font-alegreya text-heading text-white rounded-[20px] mb-10`}>
          Topics
      </div>
      <div className={`bg-primaryBlue rounded-[20px] pb-10 my-10 px-20`}>
        <CarouselCard />
      </div>
    </div>
  );
};

export default Topics;
