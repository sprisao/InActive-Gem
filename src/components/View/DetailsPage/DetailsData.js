import React from 'react';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer';

import DetailsPage from './DetailsPage';

const DetailsData = () => {
  const { cafes, restaurants, loading, stores } = useGlobalContext();
  const { id } = useParams();

  const allStores = stores.concat(restaurants, cafes);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {allStores.map((store) => {
        if (store.id === id) {
          return <DetailsPage key={store.id} store={store}></DetailsPage>;
        } else return null;
      })}

      <Footer></Footer>
    </>
  );
};

export default DetailsData;
