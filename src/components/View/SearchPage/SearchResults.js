import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import ResultGrid from './ResultGrid';

const SearchResults = (props) => {
  const [results, setResults] = useState([]);
  const { stores, loading } = useGlobalContext();

  const filterResult = stores.filter(
    (result) =>
      result.name.includes(props.userInput) ||
      result.tags.includes(props.userInput) ||
      result.firstCategory[0].includes(props.userInput)
  );

  let pageReturn;
  if (filterResult.length === 0) {
    pageReturn = <h1>결과 없음!</h1>;
  } else {
    pageReturn = (
      <>
        <ResultGrid filter={filterResult} />
      </>
    );
  }

  console.log('검색결과', filterResult.length);
  return <div>{pageReturn}</div>;
};

export default SearchResults;
