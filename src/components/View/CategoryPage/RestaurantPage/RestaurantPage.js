import React, { useState, useRef } from 'react';

// dropdown
import { useGlobalContext } from '../../../context';
import { useDetectOutsideClick } from './useDetectOutsideClick';

import Grid from '../../../Grid/Grid';
import SecondCategory from '../SecondCategory';
import Loading from '../../../Loading';

import { Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronDown } from 'react-icons/fi';

import './RestaurantPage.css';

const RestaurantPage = (props) => {
  // dropdown
  const { locationCategories, locationLoading } = useGlobalContext();
  const dropdownRef = useRef(null);
  const [isActive, setisActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setisActive(!isActive);

  const [secondCategory, setSecondCategory] = useState('전체');

  const getSecondCategory = (value) => {
    setSecondCategory(value);
  };

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
                  <span>원주기업도시</span>
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
                    <button>전체</button>
                  </li>
                  {locationCategories.map((location) => (
                    <li>
                      <button>{location.location}</button>
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
          <Grid filter='맛집' />
        </div>
      </section>
    </>
  );
};

export default RestaurantPage;
