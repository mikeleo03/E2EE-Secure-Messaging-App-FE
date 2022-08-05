import React, { useState } from 'react';

import Slick, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/selectors/auth';
import { useDispatch } from 'react-redux';
import { setTopic } from '../redux/actions/auth';
import { TopicData } from '../interfaces';
import { setNewTopicModal } from '../redux/actions/modal';
import { stores } from '../redux/stores';
import { BsPlus } from 'react-icons/bs';

const slickSettings: Settings = {
  lazyLoad: 'ondemand',
  accessibility: false,
  draggable: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface CarouselCardProps {
  topics?: TopicData[];
}

const CarouselCard: React.FC<CarouselCardProps> = ({ topics }) => {
  const { topic: selectedTopic } = useSelector(authSelector);
  const dispatch = useDispatch();

  const openNewTopicModal = (topic_id: number) => {
    dispatch(setTopic(topic_id));
    dispatch(setNewTopicModal(true));
    console.log(stores.getState());
  };

  return (
    <div className="bg-primaryBlue xs:w-[250px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px] content-center my-0 mx-auto">
      <Slick {...slickSettings}>
        {topics?.map((topic, _) => (
          <Card
            key={topic.topic_id}
            text={topic.topic_name}
            selected={selectedTopic === topic.topic_id}
            onClick={() => dispatch(setTopic(topic.topic_id))}
          />
        ))}
        <Card
          key={topics ? topics.length + 1 : 0}
          text="New Topic"
          selected={selectedTopic === (topics ? topics.length + 1 : 0)}
          onClick={() => openNewTopicModal(topics ? topics.length + 1 : 0)}
          Icon={<BsPlus />}
        />
      </Slick>
    </div>
  );
};

export default CarouselCard;
