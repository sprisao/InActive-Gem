import React, { useState } from 'react';
import Grid from '../../../Grid/Grid';
import SecondCategory from '../SecondCategory';
import Loading from '../../../Loading';

import { Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';
const CafePage = () => {
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
            <Link to={`/category/카페`}>
              <div className='categoryTitle'>
                <h3>카페</h3>
              </div>
            </Link>
            <div className='place_holder'> </div>
          </div>
        </div>
        <div className='SecondCategory__container'>
          <SecondCategory
            category='카페'
            getSecondCategory={getSecondCategory}
          />
        </div>
        <div className='CategoryGrid'>
          <Grid filter='카페' />
        </div>
      </section>
    </>
 )
}

export default CafePage
