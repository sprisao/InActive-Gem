import React from 'react';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer';

import DetailsPage from './DetailsPage';

const DetailsData = ({ history }) => {
  const {
    loading,
    menu,
    menuLoading,
    restaurants,
    cafes,
    bars,
    beautyShops,
    studios,
    petShops,
    gyms,
    kidShops,
    academies,
    pharmacies,
    flowerShops,
  } = useGlobalContext();
  const { id } = useParams();

  const allStores = restaurants.concat(
    cafes,
    bars,
    beautyShops,
    studios,
    petShops,
    gyms,
    kidShops,
    academies,
    pharmacies,
    flowerShops
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {allStores.map((store) => {
        if (store.id === id) {
          return (
            <DetailsPage
              key={store.id}
              store={store}
              history={history}
              menu={menu}
              menuLoading={menuLoading}
            ></DetailsPage>
          );
        } else return null;
      })}

      <Footer></Footer>
    </>
  );
};

export default DetailsData;
