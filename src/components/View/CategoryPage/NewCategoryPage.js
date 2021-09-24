import React, { useRef, useState, useEffect } from 'react';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import CategoryHeader from './CategoryPageComponent/CategoryHeader';
import GridCard from '../../Grid/GridCard';
import Loading from '../../Loading';
import RecommendPage from './RecommendPage';
import AllStoresPage from './AllStoresPage';

import { useGlobalContext } from '../../context';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, History } from 'swiper';

import { useParams } from 'react-router-dom';
import './NewCategoryPage.css';

SwiperCore.use([Pagination, History]);
const NewCategoryPage = ({ history }) => {
  const { firstCategory, locationCategory } = useParams();
  const { loading, secondCategories, restaurants, cafes, stores } =
    useGlobalContext();

  const [swiper, setSwiper] = useState(null);
  const [isActive, setIsActive] = useState('추천');

  console.log('param', firstCategory);
  console.log('param', locationCategory);
  // Store Data 필터링
  let storeData;
  if (firstCategory === '맛집') {
    console.log('이거잖아');
    storeData = restaurants;
  } else if (firstCategory === '카페') {
    storeData = cafes;
  } else {
    storeData = stores;
    console.log('이거아니고');
  }

  // FirstCategory 필터링
  const tabFilter = secondCategories.filter(
    (secondCategory) => secondCategory.firstCategory[0] === firstCategory
  );

  const wrapperRef = useRef();
  const activeRef = useRef();

  // 카테고리 클릭시 스크롤 이동
  const clickHandler = (params, e) => {
    setIsActive(params);
    const indexTab = tabFilter.map((item) => item.title);
    swiper.slideTo(indexTab.indexOf(params));

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

  const swipeHandler = (e) => {
    console.log(e);
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
      console.log('작동하니?');
    } else if (wrapperWidth - refLeftToMiddleSpace < viewWidth) {
      refPos = wrapperWidth;
    } else {
      refPos = refLeftToMiddleSpace - viewWidth;
    }

    window.scrollTo({
      top: 0,
    });
    wrapperRef.current.scrollTo({ left: refPos, behavior: 'smooth' });
  };

  if (loading) {
    return <Loading />;
  } else
    return (
      <>
        <BottomNavigation />
        <CategoryHeader
          category={firstCategory}
          secondCategory={firstCategory}
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
        <Swiper
          initialSlide={0}
          history={{
            key: `/newcategorytest/${firstCategory}/${locationCategory}`,
            replaceState: true,
          }}
          slidesPerView={1}
          speed={600}
          onSlideChange={(e) => swipeHandler(e)}
          onSwiper={(swiper) => setSwiper(swiper)}
          autoHeight={true}
          className='CategorySwiper'
        >
          {tabFilter.map((item) => {
            return (
              <SwiperSlide data-history={item.id} key={item.id}>
                <div className='CategoryGrid' style={{ margin: '0' }}>
                  <section className='grid'>
                    {item.title === '추천' ? (
                      <RecommendPage />
                    ) : item.title === '전체' ? (
                      <AllStoresPage />
                    ) : (
                      <div className='grid__wrapper'>
                        {storeData.map((store) => {
                          if (locationCategory === '전체') {
                            if (store.secondCategory[0] === item.title)
                              return (
                                <GridCard
                                  key={store.id}
                                  store={store}
                                  tags={store.tags}
                                  open={store.openHour}
                                  close={store.closeHour}
                                ></GridCard>
                              );
                            else return null;
                          } else if (
                            store.eupmyeondongRi === locationCategory
                          ) {
                            if (store.secondCategory[0] === item.title)
                              return (
                                <GridCard
                                  key={store.id}
                                  store={store}
                                  tags={store.tags}
                                  open={store.openHour}
                                  close={store.closeHour}
                                ></GridCard>
                              );
                            else return null;
                          } else return null;
                        })}
                      </div>
                    )}
                  </section>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
};

export default NewCategoryPage;
