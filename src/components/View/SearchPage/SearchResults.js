import React from 'react';
import { useGlobalContext } from '../../context';
import GridCard from '../../Grid/GridCard';
import Noresults from './NoResults';
import Footer from '../../Footer';

import '../../Grid/Grid.css';

const SearchResults = (props) => {
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

  const filterResult = allStores.filter(
    (result) =>
      result.name.includes(props.userInput) ||
      result.Search.includes(props.userInput) ||
      result.firstCategory[0].includes(props.userInput)
  );

  let pageReturn;
  if (filterResult.length === 0) {
    pageReturn = <Noresults />;
  } else {
    pageReturn = (
      <>
        {/* <ResultGrid filter={filterResult} /> */}
        <section className='grid'>
          <section className='grid__wrapper'>
            {filterResult.map((store) => {
              return (
                <GridCard
                  key={store.id}
                  store={store}
                  tags={store.tags}
                  open={store.openHour}
                  close={store.closeHour}
                ></GridCard>
              );
            })}
          </section>
        </section>
        <Footer />
      </>
    );
  }

  return <div>{pageReturn}</div>;
};

export default SearchResults;
