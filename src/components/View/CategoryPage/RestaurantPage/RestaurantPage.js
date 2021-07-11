import React from 'react';
import CategoryComponent from '../CategoryPageComponent/CategoryComponent';
import Loading from '../../../Loading';
import Footer from '../../../Footer';

import { useGlobalContext } from '../../../context';

const RestaurantPage = () => {
  const { restaurants, restaurantLoading } = useGlobalContext();
  if (restaurantLoading) {
    return <Loading />;
  } else
    return (
      <>
        <CategoryComponent category='맛집' stores={restaurants} />
        <Footer />
      </>
    );
};

export default RestaurantPage;
