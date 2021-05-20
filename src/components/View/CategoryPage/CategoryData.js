import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';

import CategoryPage from './CategoryPage';
const CategoryData = () => {
  const { ctgryTitle } = useParams();
  const { categories } = useGlobalContext();

  return (
    <>
      {categories.map((category) => {
        if (category.ctgryTitle === ctgryTitle) {
          console.log(category.id);
          return (
            <CategoryPage key={category.id} category={category}></CategoryPage>
          );
        }
      })}
    </>
  );
};

export default CategoryData;
