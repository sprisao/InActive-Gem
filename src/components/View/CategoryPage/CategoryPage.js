import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navigation from '../LandingPage/Navigation';
import Header from '../../Header';
import Grid from '../../Grid/SectionGrid';
import SecondCategory from './SecondCategory';

import { categories } from '../../../datafiles/categories';
import { useGlobalContext } from '../../storeContext';
import './CategoryPage.css';

const CategoryPage = () => {
  const [secondCategory, setSecondCategory] = useState('all');
  const [categoryData, setCategoryData] = useState([]);

  // 1차 카테고리 렌더링 부분
  const { id } = useParams();
  useEffect(() => {
    const newCategoryData = categories.find(
      (categories) => categories.id === parseInt(id)
    );
    const title = newCategoryData.ctgryTitle;
    const emoji = newCategoryData.strIconSource;
    const ctgryTitle = newCategoryData.ctgryTitle;
    const newCategory = { title, emoji, ctgryTitle };
    setCategoryData(newCategory);
    setSecondCategory('all');
  }, [id]);

  const { title, emoji, ctgryTitle } = categoryData;

  const getSecondCategory = (value) => {
    setSecondCategory(value);
  };

  console.log(secondCategory);

  // 새로운 카테고리 클릭시 secondCategory의 State가 'all'로 바뀌어야 한다.
  let grid;
  if (secondCategory === 'all') {
    grid = <Grid filter={ctgryTitle} />;
  } else {
    grid = <Grid filter={secondCategory} />;
  }

  return (
    <section className='CategoryPage'>
      <Header />
      <Navigation />
      <div className='CategoryTitle__wrapper'>
        <div className='categoryTitle'>
          <img src={emoji} alt='{title}' />
          <h1>{title}</h1>
        </div>
        <div className='SecondCategory__container'>
          <SecondCategory
            category={title}
            getSecondCategory={getSecondCategory}
          />
        </div>
      </div>

      {/* 신경써야 할 부분 */}
      <div className='CategoryGrid'>
        {grid}
        {/* <Grid filter={ctgryTitle} /> */}
      </div>
    </section>
  );
};

export default CategoryPage;
