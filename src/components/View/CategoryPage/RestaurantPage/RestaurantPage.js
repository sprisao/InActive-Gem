import React, { useState, useRef } from 'react';

// dropdown
import { useGlobalContext } from '../../../context';
import { useDetectOutsideClick } from './useDetectOutsideClick';

import GridCard from '../../../Grid/GridCard';
import SecondCategory from '../SecondCategory';
import Loading from '../../../Loading';

import { Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronDown } from 'react-icons/fi';

import './RestaurantPage.css';

const RestaurantPage = () => {
  const { locationCategories, restaurants, restaurantLoading } =
    useGlobalContext();

  const [items, setItems] = useState(restaurants);
  console.log(items);

  // 드롭다운 메뉴
  const dropdownRef = useRef(null);
  const [isActive, setisActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setisActive(!isActive);

  // 드롭다운메뉴에서 로케이션 선택

  const [locationCategory, setLocationCategory] = useState('전체');
  const [secondCategory, setSecondCategory] = useState('전체');

  // 로케이션 필터링
  const filterLocations = (location) => {
    if (location === '전체') {
      setItems(restaurants);
      return;
    }
    const newItems = restaurants.filter(
      (store) => store.eupmyeondongRi === location
    );
    setItems(newItems);
  };

  const getSecondCategory = (value) => {
    setSecondCategory(value);
  };

  if (restaurantLoading) {
    return <Loading></Loading>;
  } else
    return (
      <>
        <section className='RestaurantPage'>
          <div className='Category__Header__Wrapper'>
            <div className='Category__Header'>
              <Link to={`/category/홈`}>
                <button className='Category__Backward'>
                  <FiChevronLeft style={{ fontSize: '1.8rem' }} />
                </button>
              </Link>
              <Link to={`/category/맛집`}>
                <div className='Category__Title'>
                  <h3>맛집</h3>
                </div>
              </Link>
              <div className='Category__Menu__Container'>
                <button onClick={onClick} className='menu-trigger'>
                  <div className='Category__Menu__Trigger__SpanContainer'>
                    <span>{locationCategory}</span>
                  </div>
                  <FiChevronDown
                    style={{ fontSize: '1rem', marginRight: '-0.25rem' }}
                  />
                </button>
                <nav
                  ref={dropdownRef}
                  className={`menu ${isActive ? 'active' : 'inactive'}`}
                >
                  <ul>
                    <li>
                      <button
                        onClick={() => {
                          setLocationCategory('전체');
                          filterLocations('전체');
                          setisActive(!isActive);
                        }}
                      >
                        전체
                      </button>
                    </li>
                    {locationCategories.map((location) => (
                      <li key={location.id}>
                        <button
                          onClick={() => {
                            setLocationCategory(location.location);
                            setisActive(!isActive);
                            filterLocations(location.location);
                          }}
                        >
                          {location.location}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className='SecondCategory__container'>
            <SecondCategory
              category='맛집'
              getSecondCategory={getSecondCategory}
            />
          </div>
          <div className='CategoryGrid'>
            <section className='grid'>
              <section className='grid__wrapper'>
                {items.map((store) => {
                  if (secondCategory === '전체') {
                    return (
                      <GridCard
                        key={store.id}
                        store={store}
                        tags={store.tags}
                        open={store.openHour}
                        close={store.closeHour}
                      ></GridCard>
                    );
                  }
                  if (store.secondCategory[0] === secondCategory) {
                    return (
                      <GridCard
                        key={store.id}
                        store={store}
                        tags={store.tags}
                        open={store.openHour}
                        close={store.closeHour}
                      ></GridCard>
                    );
                  } else return null;
                })}
              </section>
            </section>
          </div>
        </section>
      </>
    );
};

export default RestaurantPage;
