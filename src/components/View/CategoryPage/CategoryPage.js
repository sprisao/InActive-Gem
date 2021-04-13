import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Grid from '../../Grid/SectionGrid';
import Tags from '../../Tags';

import { category } from '../../../datafiles/categories';
import './CategoryPage.css';

const CategoryPage = () => {
  const [categoryData, setCategoryData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const newCategoryData = category.find(
      (category) => category.id === parseInt(id)
    );
    const title = newCategoryData.title;
    const emoji = newCategoryData.strIconSource;
    const strCategory = newCategoryData.strCategory;
    const newCategory = { title, emoji, strCategory };
    setCategoryData(newCategory);
  }, []);

  const { title, emoji, strCategory } = categoryData;

  return (
    <section className='CategoryPage'>
      <div className='CategoryTitle__wrapper'>
        <div className='categoryTitle'>
          <img src={emoji} alt='{title}' />
          <h1>{title}</h1>
        </div>
        <div className='CategoryTags__container'>
          <Tags />
        </div>
      </div>

      {/* if idCategory === 1, 2 (new or hot) -> 
      <Grid filter = {분류1}>  
      else 
      <Gird filter = {분류2}>*/}

      <div className='CategoryGrid'>
        <Grid filter={strCategory} />
      </div>
    </section>
  );
};

export default CategoryPage;
