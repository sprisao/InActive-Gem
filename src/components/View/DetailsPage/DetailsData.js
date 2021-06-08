import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';

import DetailsPage from './DetailsPage';

const DetailsData = () => {
  const { id } = useParams();
  const { stores, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {stores.map((store) => {
        if (store.id === id) {
          return <DetailsPage key={store.id} store={store}></DetailsPage>;
        } else return null;
      })}
    </>
  );
};

export default DetailsData;
