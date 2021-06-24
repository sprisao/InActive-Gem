import React, { useState } from 'react';

import Grid from '../../../Grid/Grid';
import SecondCategory from '../SecondCategory';
import Loading from '../../../Loading';

import { Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

const RestaurantPage = (props) => {
  const [secondCategory, setSecondCategory] = useState('전체');

  const getSecondCategory = (value) => {
    setSecondCategory(value);
  };

  return (
    <>
      <section className='RestaurantPage'>
        <div className='CategoryTitle__wrapper'>
          <div className='categoryTitle'>
            <Link to={`/category/홈`}>
              <button className='backward'>
                <FiChevronLeft style={{ fontSize: '1.8rem' }} />
              </button>
            </Link>
            <Link to={`/category/맛집`}>
              <div className='categoryTitle'>
                <h3>맛집</h3>
              </div>
            </Link>
            <div className='place_holder'> </div>
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
