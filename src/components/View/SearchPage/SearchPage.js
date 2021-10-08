import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import { useParams } from 'react-router-dom';

const SearchPage = (history) => {
  const { input } = useParams();
  return (
    <>
      <BottomNavigation />
      <SearchBox history={history} />
      <SearchResults userInput={input} />
    </>
  );
};

export default SearchPage;
