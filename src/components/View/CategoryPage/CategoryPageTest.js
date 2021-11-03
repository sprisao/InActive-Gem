import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useGlobalContext } from '../../context';

import useStoreFetcher from './useStoreFetcher';

// <div>카테고리 테스트
//  <p>한번에 20개씩 불러와야 하고</p>
//  <p>'뒤로가기'가 가능해야되고</p>
//  <p>카테고리별로 보여줄 수 있어야 하고</p>
//  <p>지역과, 세컨트 카테고리를 통한 필터링과 페이지네이션 가능해야함</p>
// </div>;
const CategoryPageTest = () => {
  const { secondCategories, locationCategories, restaurants } =
    useGlobalContext();

  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [location, setLocation] = useState('allL');
  const [secondFilter, setSecondFilter] = useState('allS');

  const { results, hasMore, loading } = useStoreFetcher(
    query,
    pageNumber,
    location,
    secondFilter
  );

  const slicedResult = [];

  console.log(slicedResult);

  console.log(location);

  console.log(results);

  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  const locationHandler = (params, e) => {
    setLocation(params);
  };

  const secondFilterHandler = (params, e) => {
    setSecondFilter(params);
  };

  return (
    <div
      className=''
      style={{
        display: 'flex',
        width: 'var(--width)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input type='text' value={query} onChange={handleSearch}></input>
      <div className='button-wrapper' style={{ display: 'flex' }}>
        <button
          onClick={(e) => {
            locationHandler('allL', e);
          }}
        >
          전체
        </button>
        {locationCategories.map((item) => {
          return (
            <button
              key={item.id}
              onClick={(e) => {
                locationHandler(item.location, e);
              }}
            >
              {item.location}
            </button>
          );
        })}
      </div>
      <div className='button-wrapper' style={{ display: 'flex' }}>
        {secondCategories.map((item) => {
          if (item.firstCategory[0] === '맛집')
            return (
              <button
                key={item.id}
                onClick={(e) => {
                  secondFilterHandler(item.title, e);
                }}
              >
                {item.title}
              </button>
            );
        })}
      </div>
      <div className='images-wrapper' style={{}}>
        <div
          className='img-box'
          style={{
            width: '10rem',
            height: '10rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(10rem, 1fr))',
          }}
        >
          {results.map((item, index) => {
            if (results.length === index + 1) {
              return (
                <img
                  ref={lastItemRef}
                  key={item.id}
                  src={item.images[0].url}
                  alt=''
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              );
            } else {
              return (
                <img
                  key={item.id}
                  src={item.images[0].url}
                  alt=''
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPageTest;
