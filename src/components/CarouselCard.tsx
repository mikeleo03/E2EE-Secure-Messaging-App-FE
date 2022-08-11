import React, { useEffect, useState } from 'react';
import Slick, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/selectors/auth';
import { useDispatch } from 'react-redux';
import { setTopic } from '../redux/actions/auth';
import { TopicData } from '../interfaces/topics';
import { getAllTopics } from '../services/topic-services';
import { TopicResponse } from '../interfaces/topics';

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
  const [topicData, setTopicData] = useState<TopicResponse[]>([]);
  const [hotTopicId, setHotTopicId] = useState<number[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopics = async () => {
      try {
        const res = (await getAllTopics()) as TopicResponse[];
        setTopicData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getTopics();
  }, []);

  const hot = topicData
    .filter((topic) => topic.hot_status === true)
    .map((topic) => topic.topic_id);

  return (
    <div
      className="bg-primaryBlue xs:w-[250px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px] 
    content-center my-0 mx-auto"
    >
      <Slick {...slickSettings}>
        {topics?.map((topic, _) => (
          <Card
            key={topic.topic_id}
            text={topic.topic_name}
            hot={hot.includes(topic.topic_id)}
            src={topic.src}
            dropShadow={topic.drop_shadow}
            selected={selectedTopic === topic.topic_id}
            onClick={() => dispatch(setTopic(topic.topic_id))}
          />
        ))}
      </Slick>
    </div>
  );
};

export default CarouselCard;
