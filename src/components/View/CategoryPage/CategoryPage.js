import React, { useState } from 'react';

import Grid from '../../../components/Grid/Grid';
import SecondCategory from './SecondCategory';
import Loading from '../../Loading';

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
          <img src={props.category.strIconSource[0].url} alt='{title}' />
          <h1>{props.category.firstCategory}</h1>
        </div>
        <div className='SecondCategory__container'>
          <SecondCategory
            category={props.category.firstCategory}
            getSecondCategory={getSecondCategory}
          />
        </div>
      </div>
      <div className='CategoryGrid'>{grid}</div>
    </section>
  );
};

export default CategoryPage;
