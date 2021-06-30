import React from 'react';
import CategoryComponent from '../CategoryPageComponent/CategoryComponent';
import Loading from '../../../Loading';
import { useGlobalContext } from '../../../context';

const CafePage = () => {
  const { cafes, cafesLoading } = useGlobalContext();

  if (cafesLoading) {
    return <Loading />;
  }
  return (
    <>
      <CategoryComponent category='카페' stores={cafes} />
    </>
  );
};

export default CafePage;
