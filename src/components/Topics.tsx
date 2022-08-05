/* eslint-disable quotes */
import React from 'react';
import { TopicData } from '../interfaces';
import CarouselCard from './CarouselCard';

interface TopicsProps {
  className?: string;
  topics?: TopicData[];
}

const Topics: React.FC<TopicsProps> = ({ className, topics }) => {
  return (
    <div className="my-6 w-full flex items-center justify-center">
      <div className="bg-primaryBlue rounded-[20px]">
        <div
          className={`bg-primaryRed font-alegreya text-heading text-white rounded-[20px] mb-10`}
        >
          Topics
        </div>
        <div
          className={`bg-primaryBlue rounded-[20px] xs:pb-4 xs:my-8 sm:my-10 xs:px-10 sm:px-20`}
        >
          <CarouselCard topics={topics} />
        </div>
      </div>
    </div>
  );
};

export default Topics;
