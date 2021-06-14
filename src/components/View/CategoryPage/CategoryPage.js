import React, { useState } from 'react';

import Grid from '../../../components/Grid/Grid';
import SecondCategory from './SecondCategory';
import Loading from '../../Loading';
import { Link } from 'react-router-dom';

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
              <img
                src='https://res.cloudinary.com/diimwnnmj/image/upload/v1622513949/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%8B%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3_3_zqkqpv.png'
                alt='뒤로가기'
                className='backward-img'
              />
            </button>
          </Link>
          <div className='categoryTitle'>
            <img src={props.category.strIconSource[0].url} alt='{title}' />
            <h1>{props.category.firstCategory}</h1>
          </div>
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
