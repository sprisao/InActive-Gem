import React, { useState, useEffect } from 'react';

// dropdown
import CategoryHeader from './CategoryHeader';
import GridCard from '../../../Grid/GridCard';
import SecondCategory from '../SecondCategory';

import './CategoryComponent.css';

const CategoryComponent = (props) => {
  const [items, setItems] = useState(props.stores);
  const [secondCategory, setSecondCategory] = useState(
    () => JSON.parse(window.localStorage.getItem('secondCategory')) || '전체'
  );

  // 로케이션 필터링
  const filterLocations = (location) => {
    if (location === '전체') {
      setItems(props.stores);
      return;
    }
    const newItems = props.stores.filter(
      (store) => store.eupmyeondongRi === location
    );
    setItems(newItems);
  };

  // 세컨드카테고리 값 로컬스토리지에 저장
  useEffect(() => {
    window.localStorage.setItem(
      'secondCategory',
      JSON.stringify(secondCategory)
    );
  }, [secondCategory, items]);

  // 버튼을 통해 두번째 카테고리 가져오기
  const getSecondCategory = (value) => {
    setSecondCategory(value);
  };

  return (
    <>
      <section className='CategoryComponent'>
        <div className='Category__Navi__Wrapper'>
          <CategoryHeader
            filterLocations={filterLocations}
            category={props.category}
          />

          <div className='SecondCategory__container'>
            <SecondCategory
              category={props.category}
              getSecondCategory={getSecondCategory}
            />
          </div>
        </div>
        <div className='CategoryGrid'>
          <section className='grid'>
            <section className='grid__wrapper'>
              {items.map((store) => {
                if (secondCategory === '전체') {
                  return (
                    <GridCard
                      key={store.id}
                      store={store}
                      tags={store.tags}
                      open={store.openHour}
                      close={store.closeHour}
                    ></GridCard>
                  );
                }
                if (store.secondCategory[0] === secondCategory) {
                  return (
                    <GridCard
                      key={store.id}
                      store={store}
                      tags={store.tags}
                      open={store.openHour}
                      close={store.closeHour}
                    ></GridCard>
                  );
                } else return null;
              })}
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default CategoryComponent;
