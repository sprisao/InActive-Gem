import React from 'react';
import CategoryComponent from '../CategoryPageComponent/CategoryComponent';
import Loading from '../../../Loading';
import Footer from '../../../Footer';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../../context';

const RestaurantPage = () => {
  const { secondCategory, locationCategory } = useParams();
  const { restaurants, restaurantLoading } = useGlobalContext();
  if (restaurantLoading) {
    return <Loading />;
  } else
    return (
      <>
        <CategoryComponent
          category='맛집'
          stores={restaurants}
          secondCategory={secondCategory}
          locationCategory={locationCategory}
        />
        <Footer />
      </>
    );
};

export default RestaurantPage;
