import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../storeContext';
import { useParams } from 'react-router-dom';

import DetailsPage from './DetailsPage';

const DetailsData = () => {
  const { id } = useParams();
  const { stores, loading } = useGlobalContext();

  return (
    <>
      {stores.map((store) => {
        if (store.id === id) {
          return <DetailsPage key={store.id} store={store}></DetailsPage>;
        }
      })}
    </>
  );
};

export default DetailsData;
