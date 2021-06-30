import React, { useState } from 'react';

// dropdown
import CategoryHeader from './CategoryHeader';
import GridCard from '../../../Grid/GridCard';
import SecondCategory from '../SecondCategory';

import './CategoryComponent.css';

const CategoryComponent = (props) => {
  const [items, setItems] = useState(props.stores);

  // 드롭다운메뉴에서 로케이션 선택

  const [secondCategory, setSecondCategory] = useState('전체');

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

  const getSecondCategory = (value) => {
    setSecondCategory(value);
  };

  return (
    <>
      <section className='CategoryComponent'>
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
