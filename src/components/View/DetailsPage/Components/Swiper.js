import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Swiper.css';

const DetailSwiper = (props) => {
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
            <SwiperSlide key={item.id} className='swiper-slide'>
              <img src={item.url} alt={props.title} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default DetailSwiper;
