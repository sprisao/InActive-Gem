import React from 'react';
import CategoryComponent from '../CategoryPageComponent/CategoryComponent';

import { useGlobalContext } from '../../../context';

const CafePage = () => {
  const { stores, loading } = useGlobalContext();
  return (
    <>
      <CategoryComponent
        category='카페'
        stores={stores.filter((store) => store.firstCategory[0] === '카페')}
        loading={loading}
      />
    </>
  );
};

export default CafePage;
