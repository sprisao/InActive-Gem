import React from 'react';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';

import CategoryPage from './CategoryPage';
const CategoryData = () => {
  const { firstCategory } = useParams();
  const { firstCategories, loading } = useGlobalContext();
  return (
    <>
      {firstCategories.map((category) => {
        if (category.firstCategory === firstCategory) {
          return (
            <CategoryPage
              key={category.id}
              category={category}
              loading={loading}
            ></CategoryPage>
          );
        } else return null;
      })}
    </>
  );
};

export default CategoryData;
