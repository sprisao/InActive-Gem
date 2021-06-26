import React, { useState } from 'react';

import Grid from '../../../components/Grid/Grid';
import SecondCategory from './SecondCategory';
import Loading from '../../Loading';
import { Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

import './CategoryPage.css';

const CategoryPage = (props) => {
  const [secondCategory, setSecondCategory] = useState('전체');

  const getSecondCategory = (value) => {
    setSecondCategory(value);
  };

  let grid;
  if (props.loading) {
    grid = <Loading />;
  }
  if (secondCategory) {
    if (secondCategory === '전체') {
      grid = <Grid filter={props.category.firstCategory} />;
    } else {
      grid = <Grid filter={secondCategory} />;
    }
  } else {
    grid = <Grid filter='leer' />;
  }
  return (
    <section className='CategoryPage'>
      <div className='CategoryTitle__wrapper'>
        <div className='categoryTitle'>
          <Link to={`/category/홈`}>
            <button className='backward'>
              <FiChevronLeft style={{ fontSize: '1.8rem' }} />
            </button>
          </Link>
          <Link to={`/category/${props.category.firstCategory}`}>
            <div className='categoryTitle'>
              <h3>{props.category.firstCategory}</h3>
            </div>
          </Link>
          <div className='place_holder'> </div>
        </div>
      </div>
      <div className='SecondCategory__container'>
        <SecondCategory
          category={props.category.firstCategory}
          getSecondCategory={getSecondCategory}
        />
      </div>
      <div className='CategoryGrid'>{grid}</div>
    </section>
  );
};

export default CategoryPage;
