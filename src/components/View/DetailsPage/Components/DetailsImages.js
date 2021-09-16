import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './DetailsImages.css';

const DetailsImages = (props) => {
  return (
    <div className='Details-Swiper'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
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
    </div>
  );
};

export default DetailsImages;
