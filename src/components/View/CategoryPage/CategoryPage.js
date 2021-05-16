import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navigation from '../LandingPage/Navigation';
import Header from '../../Header';
import Grid from '../../Grid/SectionGrid';
import SecondCategory from './SecondCategory';
import Leerpage from '../ErrorPage/LeerPage';

import { categories } from '../../../datafiles/categories';
import { useGlobalContext } from '../../storeContext';
import './CategoryPage.css';

const CategoryPage = () => {
  const [secondCategory, setSecondCategory] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  // 1차 카테고리 렌더링 부분
  const { id } = useParams();
  useEffect(() => {
    const newCategoryData = categories.find(
      (categories) => categories.id === parseInt(id)
    );
    const title = newCategoryData.ctgryTitle;
    const emoji = newCategoryData.strIconSource;

    const newCategory = { title, emoji };
    setCategoryData(newCategory);
    setSecondCategory('all');
  }, [id]);

  console.log(categoryData);

  const { title, emoji } = categoryData;

  const getSecondCategory = (value) => {
    setSecondCategory(value);
  };

  console.log(secondCategory);
  console.log(title);

  // 카테고리에 해당하는 아이템이 없을시 -> Leerpage를 보여줘야 한다.

  // 새로운 카테고리 클릭시 secondCategory의 State가 'all'로 바뀌어야 한다.
  let grid;
  if (secondCategory) {
    if (secondCategory === 'all') {
      grid = <Grid filter={title} />;
    } else {
      grid = <Grid filter={secondCategory} />;
    }
  } else {
    grid = <Grid filter='leer' />;
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
      <div className='CategoryGrid'>{grid}</div>
    </section>
  );
};

export default CategoryPage;
