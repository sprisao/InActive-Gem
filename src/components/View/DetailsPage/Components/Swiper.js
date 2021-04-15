import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Swiper.css';

const DetailSwiper = (props) => {
  console.log(props.img);
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {props.img &&
        props.img.map((item) => {
          return (
            <SwiperSlide className='swiper-slide'>
              <img src={item} alt={props.title} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default DetailSwiper;
