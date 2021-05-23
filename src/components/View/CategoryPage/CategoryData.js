import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../storeContext';
import { useParams } from 'react-router-dom';

import CategoryPage from './CategoryPage';
const CategoryData = () => {
  const { ctgryTitle } = useParams();
  const { firstCategories, secondCategories, loading } = useGlobalContext();
  console.log(secondCategories.firstCategoryData);
  return (
    <>
      {firstCategories.map((category) => {
        if (category.ctgryTitle === ctgryTitle) {
          return (
            <CategoryPage key={category.id} category={category}></CategoryPage>
          );
        }
      })}
    </>
  );
};

export default CategoryData;
