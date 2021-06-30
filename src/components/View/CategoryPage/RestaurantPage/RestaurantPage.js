import React from 'react';
import CategoryComponent from '../CategoryPageComponent/CategoryComponent';

import { useGlobalContext } from '../../../context';

const RestaurantPage = () => {
  const { stores, loading } = useGlobalContext();
  console.log(stores);
  return (
    <>
      <CategoryComponent
        category='맛집'
        stores={stores.filter((store) => store.firstCategory[0] === '맛집')}
        loading={loading}
      />
    </>
  );
};

export default RestaurantPage;
