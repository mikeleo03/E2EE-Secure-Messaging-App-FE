/* eslint-disable quotes */
import React from 'react';
import { TopicData } from '../interfaces/topics';
import CarouselCard from './CarouselCard';
import { IoInformation } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setTutorialModal } from '../redux/actions/modal';

interface TopicsProps {
  className?: string;
  topics?: TopicData[];
}

const Topics: React.FC<TopicsProps> = ({ className, topics }) => {
  const dispatch = useDispatch();

  const openTutorialModal = () => {
    dispatch(setTutorialModal(true));
  };
  return (
    <div className="my-6 w-full flex items-center justify-center">
      <div className="bg-primaryBlue rounded-[20px]">
        <div
          className={`bg-primaryRed font-alegreya text-heading text-white rounded-[20px] mb-10 relative`}
        >
          <p>Topics</p>
          <div
            className="xs:h-[23px] xs:w-[23px] lg:h-[45px] lg:w-[45px] rounded-full bg-white text-black 
          xs:text-[13px] lg:text-[25px] flex items-center justify-center absolute top-[50%] bottom-0 
          -translate-y-[50%] right-5 cursor-pointer"
            onClick={openTutorialModal}
          >
            <IoInformation />
          </div>
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
