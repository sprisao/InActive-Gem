import React from 'react';
import CategoryComponent from '../CategoryPageComponent/CategoryComponent';
import Loading from '../../../Loading';
import Footer from '../../../Footer';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../../context';

const CafePage = () => {
  const { firstCategory, secondCategory } = useParams();
  const { cafes, cafesLoading } = useGlobalContext();
  console.log(cafes);
  if (cafesLoading) {
    return <Loading />;
  } else
    return (
      <>
        <CategoryComponent
          category='카페'
          stores={cafes}
          secondCategory={secondCategory}
          locationCategory={[]}
        />
        <Footer />
      </>
    );
};

export default CafePage;
