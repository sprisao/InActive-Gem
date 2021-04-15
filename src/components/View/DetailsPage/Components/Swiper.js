import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import './Swiper.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DetailSwiper = (props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* {props.img &&
        props.img.map((item) => {
          return (
            <SwiperSlide className='swiper-slide'>
              <img src={item} alt='' />
            </SwiperSlide>
          );
        })} */}
    </Swiper>
  );
};

export default DetailSwiper;
