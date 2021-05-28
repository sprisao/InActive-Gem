import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navigation from '../LandingPage/Navigation';
import Grid from '../../../components/Grid/Grid';
import SecondCategory from './SecondCategory';
import Leerpage from '../ErrorPage/LeerPage';

import './CategoryPage.css';

const CategoryPage = (category) => {
  const [secondCategory, setSecondCategory] = useState('전체');
  const getSecondCategory = (value) => {
    setSecondCategory(value);
  };

  let grid;
  if (secondCategory) {
    if (secondCategory === '전체') {
      grid = <Grid filter={category.category.firstCategory} />;
    } else {
      grid = <Grid filter={secondCategory} />;
    }
  } else {
    grid = <Grid filter='leer' />;
  }

  return (
    <section className='CategoryPage'>
      <Navigation />
      <div className='CategoryTitle__wrapper'>
        <div className='categoryTitle'>
          <img src={category.category.strIconSource[0].url} alt='{title}' />
          <h1>{category.category.firstCategory}</h1>
        </div>
        <div className='SecondCategory__container'>
          <SecondCategory
            category={category.category.firstCategory}
            getSecondCategory={getSecondCategory}
          />
        </div>
      </div>
      <div className='CategoryGrid'>{grid}</div>
    </section>
  );
};

export default CategoryPage;
