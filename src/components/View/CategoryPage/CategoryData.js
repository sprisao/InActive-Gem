import React from 'react';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';

import Loading from '../../Loading';
import Footer from '../../Footer';
import CategoryComponent from './CategoryPageComponent/CategoryComponent';

const CategoryData = () => {
  const { firstCategory, secondCategory, locationCategory } = useParams();
  const { firstCategories, loading, stores } = useGlobalContext();

  if (loading) {
    return <Loading />;
  } else
    return (
      <>
        {firstCategories.map((category) => {
          if (category.firstCategory === firstCategory) {
            return (
              <CategoryComponent
                key={category.id}
                id={category.id}
                category={firstCategory}
                secondCategory={secondCategory}
                locationCategory={locationCategory}
                stores={stores.filter(
                  (store) => store.firstCategory[0] === firstCategory
                )}
              />
            );
          } else return null;
        })}
        <Footer />
      </>
    );
};

export default CategoryData;
