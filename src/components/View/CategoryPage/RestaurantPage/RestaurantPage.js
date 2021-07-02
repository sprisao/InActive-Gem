import React from 'react';
import CategoryComponent from '../CategoryPageComponent/CategoryComponent';
import Loading from '../../../Loading';

import { useGlobalContext } from '../../../context';

const RestaurantPage = () => {
  const { restaurants, restaurantLoading } = useGlobalContext();
  if (restaurantLoading) {
    return <Loading />;
  } else
    return (
      <>
        <CategoryComponent category='맛집' stores={restaurants} />
      </>
    );
};

export default RestaurantPage;
