import React, { useState, useEffect } from 'react';

import Loading from './Loading';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import { FiChevronRight } from 'react-icons/fi';

import Airtable from 'airtable';
import './Promotion.css';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

require('dotenv').config();
const storeBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base('app0tAUATUh8jBxX4');

const Promotion = ({ history }) => {
  const [promoLoading, setPromoLoading] = useState(true);
  const [promo, setPromo] = useState([]);
  const [promoItems, setPromoItems] = useState([]);

  useEffect(() => {
    storeBase('Promotion')
      .select({
        view: 'All',
        pageSize: 10,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            promoItems.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setPromo(promoItems);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('업체데이터 불러오기 성공');
            setPromoLoading(false);
          }
        }
      );
  }, []);

  return (
    <div className='SecondGrid__Wrap'>
      <div className='SecondGrid__Item'>
        <Swiper navigation={true} className='mySwiper'>
          <div className='Navigation__Item__Header'>
            <p>요즘 핫한 곳</p>{' '}
            <FiChevronRight
              style={{
                fontSize: '1.35rem',
                strokeWidth: '3px',
                color: '#c6c6c6',
                marginLeft: '0.3rem',
              }}
            />
          </div>
          {promo.map((item) => {
            console.log(item);
            if (item.isPromotion[0] === true) {
              return (
                <SwiperSlide
                  className='swiper-slide'
                  key={item.id}
                  onClick={() => history.history.push(`/promotion/${item.id}`)}
                >
                  <div className='Home__Slider__Article'>
                    <p>{item.mainCopy}</p>
                    <h3>{item.name}</h3>
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
                    <strong>
                      Your browser does not support the video tag.
                    </strong>
                  </video>
                </SwiperSlide>
              );
            } else return null;
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Promotion;
