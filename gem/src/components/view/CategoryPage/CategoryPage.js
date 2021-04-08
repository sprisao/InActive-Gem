import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { category } from '../../../datafiles/categories';

const CategoryPage = () => {
  const [categoryData, setCategoryData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const newCategoryData = category.find(
      (category) => category.id === parseInt(id)
    );
    const title = newCategoryData.title;
    const emoji = newCategoryData.strIconSource;
    const newCategory = { title, emoji };
    setCategoryData(newCategory);
  }, []);

  const { title, emoji } = categoryData;

  return (
    <section className='CategoryPage'>
      <div className='CategoryTitle'>
        <img src={emoji} alt='' />
        <p>{title}</p>
      </div>
    </section>
  );
};

export default CategoryPage;
