import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronRight } from 'react-icons/fi';

import { useGlobalContext } from './context';

import './Promotion.css';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
const Promotion = ({ history }) => {
  const { promotions } = useGlobalContext();

  return (
    <div className='SecondGrid__Wrap'>
      <div className='SecondGrid__Item'>
        <Swiper
          navigation={true}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <div className='Navigation__Item__Header'>
            <p>젬 큐레이션</p>
            <FiChevronRight
              style={{
                fontSize: '1.35rem',
                strokeWidth: '3px',
                color: '#c6c6c6',
                marginLeft: '0.3rem',
              }}
            />
          </div>
          {promotions.map((item) => {
            return (
              <SwiperSlide
                className='swiper-slide'
                key={item.id}
                onClick={() =>
                  history.history.push(
                    `/store/${item.store[0]}/details/Curation`
                  )
                }
              >
                <div className='Home__Slider__Article'>
                  -<p>{item.mainCopy}</p>
                  <h3>{item.name}</h3>-
                </div>

                <video
                  autoPlay={true}
                  loop={true}
                  controls={false}
                  playsInline
                  muted
                  type='video/mp4'
                >
                  <source src={item.promotionMedia[0].url} type='video/mp4' />
                  <strong>Your browser does not support the video tag.</strong>
                </video>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Promotion;
