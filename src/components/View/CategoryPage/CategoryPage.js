import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navigation from '../LandingPage/Navigation';
import Header from '../../Header';
import Grid from '../../Grid/SectionGrid';
import SecondCategory from '../../SecondCategory';

import { categories } from '../../../datafiles/categories';
import './CategoryPage.css';

const CategoryPage = () => {
  const [categoryData, setCategoryData] = useState([]);

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
  }, [id]);

  const { title, emoji, ctgryTitle } = categoryData;

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
          <SecondCategory />
        </div>
      </div>

      {/* if idCategory === 1, 2 (new or hot) -> 
      <Grid filter = {분류1}>  
      else 
      <Gird filter = {분류2}>*/}

      <div className='CategoryGrid'>
        <Grid filter={ctgryTitle} />
      </div>
    </section>
  );
};

export default CategoryPage;
