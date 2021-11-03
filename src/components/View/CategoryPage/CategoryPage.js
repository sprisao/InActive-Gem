import React, { useRef, useState, useEffect } from 'react';
import CategoryHeader from './CategoryPageComponent/CategoryHeader';
import GridCard from '../../Grid/GridCard';
import Loading from '../../Loading';

import { HiBadgeCheck } from 'react-icons/hi';

import { useGlobalContext } from '../../context';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, History } from 'swiper';

import smoothscroll from 'smoothscroll-polyfill';

import { useParams } from 'react-router-dom';
import './CategoryPage.css';

SwiperCore.use([Pagination, History]);

smoothscroll.polyfill();

const CategoryPage = (history) => {
  const { firstCategory, secondCategory, locationCategory } = useParams();
  const {
    restaurantLoading,
    cafesLoading,
    barsLoading,
    beautyShopsLoading,
    studiosLoading,
    petShopsLoading,
    gymsLoading,
    kidShopsLoading,
    academiesLoading,
    pharmaciesLoading,
    flowerShopsLoading,
    secondLoading,

    secondCategories,
    restaurants,
    cafes,
    bars,
    beautyShops,
    studios,
    petShops,
    gyms,
    kidShops,
    academies,
    pharmacies,
    flowerShops,
  } = useGlobalContext();

  // SecondCategory 필터링
  const tabFilter = secondCategories.filter(
    (secondCategory) => secondCategory.firstCategory[0] === firstCategory
  );

  const [initPage, setInitPage] = useState(secondCategory);
  const [isActive, setIsActive] = useState(secondCategory);
  console.log(isActive);
  const [swiper, setSwiper] = useState(null);

  // Store Data 필터링
  let storeData;
  let loadingCategory;

  const locationTaker = locationCategory;

  if (firstCategory === '맛집') {
    storeData = restaurants;
    loadingCategory = restaurantLoading;
  } else if (firstCategory === '카페') {
    storeData = cafes;
    loadingCategory = cafesLoading;
  } else if (firstCategory === '호프・주점') {
    storeData = bars;
    loadingCategory = barsLoading;
  } else if (firstCategory === '운동・헬스') {
    storeData = gyms;
    loadingCategory = gymsLoading;
  } else if (firstCategory === '미용・뷰티') {
    storeData = beautyShops;
    loadingCategory = beautyShopsLoading;
  } else if (firstCategory === '스튜디오') {
    storeData = studios;
    loadingCategory = studiosLoading;
  } else if (firstCategory === '반려동물') {
    storeData = petShops;
    loadingCategory = petShopsLoading;
  } else if (firstCategory === '키즈') {
    storeData = kidShops;
    loadingCategory = kidShopsLoading;
  } else if (firstCategory === '교육・학원') {
    storeData = academies;
    loadingCategory = academiesLoading;
  } else if (firstCategory === '병원・약국') {
    storeData = pharmacies;
    loadingCategory = pharmaciesLoading;
  } else if (firstCategory === '꽃') {
    storeData = flowerShops;
    loadingCategory = flowerShopsLoading;
  }

  const wrapperRef = useRef();
  const activeRef = useRef();

  // 카테고리 클릭시 스크롤 이동
  const clickHandler = (params, e) => {
    history.history.push(
      `/category/${firstCategory}/${locationCategory}/${params}`
    );
    setIsActive(params);
    setInitPage(params);
    const indexTab = tabFilter.map((item) => item.title);
    // swiper.slideTo(indexTab.indexOf(params));

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

    // 타겟요소를 감싸고있는 부모요소의 스크롤영역을 포함한 넓이
    const wrapperWidth = wrapperRef.current.scrollWidth;

    // 화면의 중앙가지의 거리
    const viewWidth = wrapperRef.current.clientWidth / 2;
    let pos = 0;

    if (leftToMiddleSpace < viewWidth) {
      pos = 0;
    } else if (wrapperWidth - leftSpace < viewWidth) {
      pos = wrapperWidth;
    } else {
      pos = leftToMiddleSpace - viewWidth;
    }

    e.preventDefault();
    wrapperRef.current.scrollTo({ left: pos, behavior: 'smooth' });
  };

  // 스와이프시 스크롤 이동

  // const swipeHandler = (e) => {
  //   setIsActive(tabFilter[e.activeIndex].title);
  //   setInitPage(tabFilter[e.activeIndex].title);
  //   // console.log(locationCategory);
  //   // console.log(e.activeIndex);
  //   const refLeftSpace = activeRef.current.offsetLeft;
  //   const refTabWidth = activeRef.current.offsetWidth / 2;
  //   const refLeftToMiddleSpace = refLeftSpace + refTabWidth;

  //   // 타겟요소를 감싸고있는 부모요소의 스크롤영역을 포함한 넓이
  //   const wrapperWidth = wrapperRef.current.scrollWidth;

  //   // 화면의 중앙가지의 거리
  //   const viewWidth = wrapperRef.current.clientWidth / 2;

  //   let refPos = 0;

  //   if (refLeftToMiddleSpace < viewWidth) {
  //     refPos = 0;
  //   } else if (wrapperWidth - refLeftToMiddleSpace < viewWidth) {
  //     refPos = wrapperWidth;
  //   } else {
  //     refPos = refLeftToMiddleSpace - viewWidth;
  //   }

  //   window.scrollTo({
  //     top: 0,
  //   });
  //   wrapperRef.current.scrollTo({ left: refPos, behavior: 'smooth' });
  // };

  return (
    <>
      <div className='CategoryPage--Header--Container'>
        <div className='Header--Fix--Box'>
          <CategoryHeader
            category={firstCategory}
            secondCategory={secondCategory}
            currentLocation={locationCategory}
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
        </div>
      </div>

      {loadingCategory ? (
        <Loading />
      ) : (
        <div className='CategoryGrid'>
          <div className='notice'>
            <HiBadgeCheck
              style={{
                alignItems: 'center',
                color: '#f21d73',
                fontSize: '1.15rem',
              }}
            />
            <span>
              는 젬에서 인증하는{' '}
              <span
                style={{
                  background:
                    'linear-gradient(to top, #FFE400 50%, transparent 50% )',
                }}
              >
                지역명소(로컬젬)
              </span>
              입니다.
            </span>
          </div>
          <section className='grid'>
            <div className='grid__wrapper'>
              {storeData.map((store) => {
                if (
                  locationCategory === store.eupmyeondongRi &&
                  store.secondCategory[0] === isActive
                ) {
                  return (
                    <GridCard
                      key={store.id}
                      store={store}
                      open={store.openHour}
                      close={store.closeHour}
                    ></GridCard>
                  );
                } else if (
                  locationCategory === '전체' &&
                  store.secondCategory[0] === isActive
                ) {
                  return (
                    <GridCard
                      key={store.id}
                      store={store}
                      open={store.openHour}
                      close={store.closeHour}
                    ></GridCard>
                  );
                }
              })}
            </div>
          </section>
        </div>
        // <Swiper
        //   initialSlide={0}
        //   history={{
        //     key: `/category/${firstCategory}/${locationTaker}`,
        //     replaceState: true,
        //   }}
        //   slidesPerView={1}
        //   speed={600}
        //   onSlideChange={(e) => swipeHandler(e)}
        //   onSwiper={(swiper) => setSwiper(swiper)}
        //   autoHeight={true}
        //   className='CategorySwiper'
        // >
        //   {tabFilter.map((item) => {
        //     if (item.title === isActive) {
        //       return (
        //         <SwiperSlide data-history={isActive} key={item.id}>
        //         </SwiperSlide>
        //       );
        //     } else {
        //       return null;
        //     }
        //   })}
        // </Swiper>
      )}
    </>
  );
};

export default CategoryPage;
