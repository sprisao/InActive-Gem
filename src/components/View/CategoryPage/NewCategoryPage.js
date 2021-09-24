import React, { useRef, useState, useEffect } from 'react';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import CategoryHeader from './CategoryPageComponent/CategoryHeader';
import Loading from '../../Loading';

import { useGlobalContext } from '../../context';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
import './NewCategoryPage.css';

const NewCategoryPage = ({ history }) => {
  const {
    loading,
    firstCategories,
    secondCategories,
    locationCagegory,
    restaurants,
    cafes,
    stores,
  } = useGlobalContext();

  console.log(
    '이거 왜 안나오냐',
    secondCategories.filter(
      (secondCategory) => secondCategory.firstCategory[0] === '맛집'
    )
  );

  const [isActive, setIsActive] = useState('추천');
  const [swiper, setSwiper] = useState(null);

  // FirstCategory 필터링
  const tabFilter = secondCategories.filter(
    (secondCategory) => secondCategory.firstCategory[0] === '맛집'
  );

  const wrapperRef = useRef();
  const activeRef = useRef();

  // 카테고리 클릭시 스크롤 이동
  const clickHandler = (params, e) => {
    setIsActive(params);
    swiper.slideTo(tabFilter.indexOf(params));

    let whichTarget;
    if (e.target.localName === 'span') {
      whichTarget = e.target.parentElement;
    } else {
      whichTarget = e.target;
    }

    // 타겟요소의 중앙에서부터 화면왼쪽까지의 거리
    const leftSpace = whichTarget.offsetLeft;
    const tabWidth = whichTarget.offsetWidth / 2;
    const leftToMiddleSpace = leftSpace + tabWidth;
    console.log(leftToMiddleSpace);
    // 타겟요소를 감싸고있는 부모요소의 스크롤영역을 포함한 넓이
    const wrapperWidth = wrapperRef.current.scrollWidth;
    console.log(wrapperWidth);

    // 화면의 중앙가지의 거리
    const viewWidth = wrapperRef.current.clientWidth / 2;
    console.log('viewWidth', viewWidth);
    let pos = 0;

    if (leftToMiddleSpace < viewWidth) {
      pos = 0;
      console.log('맨 외쪽으로 스와이프', pos);
    }
    if (wrapperWidth - leftSpace < viewWidth) {
      pos = wrapperWidth;
      console.log('맨 오른 쪽으로 스와이프', pos);
    } else {
      pos = leftToMiddleSpace - viewWidth;
    }

    e.preventDefault();
    wrapperRef.current.scrollTo({ left: pos, behavior: 'smooth' });
  };

  // 스와이프시 스크롤 이동

  const swipeHandler = (e) => {
    setIsActive(tabFilter[e.activeIndex].title);

    const refLeftSpace = activeRef.current.offsetLeft;
    const refTabWidth = activeRef.current.offsetWidth / 2;
    const refLeftToMiddleSpace = refLeftSpace + refTabWidth;

    // 타겟요소를 감싸고있는 부모요소의 스크롤영역을 포함한 넓이
    const wrapperWidth = wrapperRef.current.scrollWidth;

    // 화면의 중앙가지의 거리
    const viewWidth = wrapperRef.current.clientWidth / 2;

    let refPos = 0;

    if (refLeftToMiddleSpace < viewWidth) {
      refPos = 0;
    }
    if (wrapperWidth - refLeftToMiddleSpace < viewWidth) {
      refPos = wrapperWidth;
    } else {
      refPos = refLeftToMiddleSpace - viewWidth;
    }

    wrapperRef.current.scrollTo({ left: refPos, behavior: 'smooth' });
  };

  if (loading) {
    return <Loading />;
  } else
    return (
      <>
        <BottomNavigation />
        <CategoryHeader
          category={'맛집'}
          secondCategory={'맛집'}
          currentLocation={'전체'}
        />
        <section className='SecondCategory-Container'>
          <div className='SecondCategory-Wrapper' ref={wrapperRef}>
            {tabFilter.map((item) => {
              if (isActive === item.title) {
                return (
                  <div
                    className='SecondCategory-Item Active'
                    key={item.id}
                    onClick={(e) => {
                      clickHandler(item.title, e);
                    }}
                    ref={activeRef}
                  >
                    <span>
                      {item.emoji} {item.title}
                    </span>
                  </div>
                );
              } else
                return (
                  <div
                    className='SecondCategory-Item'
                    key={item.id}
                    onClick={(e) => {
                      clickHandler(item.title, e);
                    }}
                  >
                    <span>
                      {item.emoji} {item.title}
                    </span>
                  </div>
                );
            })}
          </div>
        </section>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(e) => swipeHandler(e)}
          onSwiper={(swiper) => setSwiper(swiper)}
          className='CategorySwiper'
          history={{
            key: 'newcategorytest/categories',
          }}
        >
          {tabFilter.map((item) => {
            return (
              <SwiperSlide data-history={item.title} key={item.id}>
                {item.title === '추천' ? <h3>This is 추천페이지</h3> : null}
                {item.title}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
};

export default NewCategoryPage;
