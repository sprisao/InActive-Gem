import React, { useRef, useState } from 'react';
import CategoryHeader from './CategoryPageComponent/CategoryHeader';
import GridCard from '../../Grid/GridCard';
import Loading from '../../Loading';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';

import { HiBadgeCheck } from 'react-icons/hi';

import { useGlobalContext } from '../../context';

import { useParams } from 'react-router-dom';
import './CategoryPage.css';

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

  const [isActive, setIsActive] = useState(secondCategory);

  // Store Data 필터링
  let storeData;
  let loadingCategory;

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

  let afterFilter = [];
  if (locationCategory === '전체' && isActive === '전체') {
    afterFilter = storeData;
  } else if (locationCategory === '전체') {
    afterFilter = storeData.filter((x) => x.secondCategory[0] === isActive);
  } else if (isActive === '전체') {
    afterFilter = storeData.filter(
      (x) => x.eupmyeondongRi === locationCategory
    );
  } else {
    afterFilter = storeData.filter(
      (x) =>
        x.eupmyeondongRi === locationCategory &&
        x.secondCategory[0] === isActive
    );
  }

  const wrapperRef = useRef();
  const activeRef = useRef();

  // 카테고리 클릭시 스크롤 이동
  const clickHandler = (params, e) => {
    history.history.push(
      `/category/${firstCategory}/${locationCategory}/${params}`
    );
    setIsActive(params);

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

  return (
    <>
      <BottomNavigation />
      <div className='CategoryPage--Header--Container'>
        <div className='Header--Fix--Box'>
          <CategoryHeader
            category={firstCategory}
            secondCategory={secondCategory}
            currentLocation={locationCategory}
          />

          <section className='SecondCategory-Container'>
            <div className='SecondCategory-Wrapper' ref={wrapperRef}>
              <div
                className={`SecondCategory-Item ${
                  isActive === '전체' ? 'Active' : 'inactive'
                }`}
                onClick={(e) => {
                  clickHandler('전체', e);
                }}
                ref={activeRef}
              >
                <span>🅰️ 전체</span>
              </div>
              {tabFilter.map((item) => {
                return (
                  <div
                    className={`SecondCategory-Item ${
                      isActive === item.title ? 'Active' : 'inactive'
                    }`}
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
              })}
            </div>
          </section>
        </div>
      </div>

      {loadingCategory ? (
        <Loading />
      ) : (
        <div className='CategoryGrid'>
          {afterFilter.length !== 0 ? (
            <>
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
                  {afterFilter.map((store) => {
                    return (
                      <GridCard
                        key={store.id}
                        store={store}
                        open={store.openHour}
                        close={store.closeHour}
                      ></GridCard>
                    );
                  })}
                </div>
              </section>
            </>
          ) : (
            <section className='NO-DATA'>
              <img
                src='https://c.tenor.com/7LxZinFmHbEAAAAi/cute-derpy-duck.gif'
                alt=''
              />
              <h1>텅.. 비었습니다 ㅜㅜ</h1>
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
