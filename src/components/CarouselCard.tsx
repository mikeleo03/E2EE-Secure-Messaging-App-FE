import React, { useState } from 'react';

import Slick, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

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

const topics = [
  { topic_id: 1, topic_name: 'Anjay' },
  { topic_id: 2, topic_name: 'Anjay' },
  { topic_id: 3, topic_name: 'Anjay' },
  { topic_id: 4, topic_name: 'Anjay' },
  { topic_id: 5, topic_name: 'Anjay' },
  { topic_id: 6, topic_name: 'Anjay' },
  { topic_id: 7, topic_name: 'Anjay' },
  { topic_id: 8, topic_name: 'Anjay' },
  { topic_id: 9, topic_name: 'Anjay' },
];
const CarouselCard: React.FC = () => {
  const [clickedTopic, setClickedTopic] = useState(0);

  return (
    <div className="bg-primaryBlue xs:w-[250px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px] content-center my-0 mx-auto">
      <Slick {...slickSettings}>
        {topics.map((topic, _) => (
          <Card
            key={topic.topic_id}
            text={topic.topic_name}
            clicked={clickedTopic === topic.topic_id}
          />
        ))}
      </Slick>
    </div>
  );
};

export default CarouselCard;
