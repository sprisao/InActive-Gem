import React from 'react';
import Footer from '../../Footer';
import Seperator from '../../Separator';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import './PromotionPage.css';

import { FiChevronLeft } from 'react-icons/fi';

import { useGlobalContext } from '../../context';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const PromotionPage = ({ history }) => {
  const { menu } = useGlobalContext();
  const name = '디어마이블루';
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <section className='PromotionPage'>
        <div className='Promotion--Header'>
          <div className='Promotion--Header--Background'>
            <img
              className='Promotion--Header__BackgroundImage'
              src='https://dl.airtable.com/.attachmentThumbnails/1a9293a0bf19e838d320da53a38f39fa/a53fd774'
              alt='디어마이블루 '
            />
          </div>
          <div className='Promotion--Header--Contents'>
            <div
              className='Promotion--Navi'
              onClick={goBack}
              style={{ cursor: 'pointer' }}
            >
              <FiChevronLeft style={{ fontSize: '1.5rem' }} />
            </div>
            <div className='Promotion--Title'>
              <div className='Promotion--Title--Article'>
                <p>디어마이블루의 이야기</p>
                <h3>디어마이블루</h3>
                <h4>DEARMYBLUE</h4>
              </div>
              <div className='Promotion--Menu--Container'>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={true}
                  className='Promotion-Menu-Swiper'
                >
                  {menu.map((item) => {
                    if (item.storeName[0] === name) {
                      return (
                        <SwiperSlide
                          className='Promotion-Menu-Slider'
                          key={item.id}
                        >
                          <div className='Promotion--Menu--Item--Wrapper'>
                            <div className='Promotion--Menu--ImageContainer'>
                              <img src={item.menuImage[0].url} alt='' />
                            </div>
                            <div className='Promotion--Menu--Article'>
                              <h4>{item.menu}</h4>
                              <p>{item.menuDesc}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    } else return null;
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className='Promotion--Article__Container'>
          <div className='Promotion__Article__Image'>
            <img
              src='https://res.cloudinary.com/diimwnnmj/image/upload/v1629967505/12512240-f0315ba1a770e053241ce30db86452ce_o8pugn.png'
              alt=''
              style={{ height: '100%', marginTop: '3rem' }}
            />
          </div>
        </div>
        <div className='Visit-Button--Container'>
          <button
            className='Visit-Button'
            onClick={() => history.push(`/store/recIJbN6Z0BlCQLuL`)}
          >
            방문하기
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PromotionPage;
