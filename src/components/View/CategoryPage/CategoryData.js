import React from 'react';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';

import Loading from '../../Loading';
import Footer from '../../Footer';
import CategoryComponent from './CategoryPageComponent/CategoryComponent';

const CategoryData = () => {
  const { firstCategory } = useParams();
  const { firstCategories, loading, stores } = useGlobalContext();
  console.log(stores);

  if (loading) {
    return <Loading />;
  } else
    return (
      <>
        {firstCategories.map((category) => {
          if (category.firstCategory === firstCategory) {
            return (
              <CategoryComponent
                id={category.id}
                category={firstCategory}
                stores={stores.filter(
                  (store) => store.firstCategory[0] === firstCategory
                )}
              />
            );
          } else return null;
        })}
        <footer />
      </>
    );
};

export default CategoryData;
