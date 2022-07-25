import React from 'react';

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
const CarouselCard: React.FC = () => {
  return (
    <div className="bg-primaryBlue m:w-[600px] lg:w-[800px] xl:w-[1000px] content-center my-0 mx-auto">
      <Slick {...slickSettings}>
        <Card text="1" />
        <Card text="2" />
        <Card text="3" />
        <Card text="4" />
        <Card text="1" />
        <Card text="2" />
        <Card text="3" />
        <Card text="4" />
      </Slick>
    </div>
  );
};

export default CarouselCard;
