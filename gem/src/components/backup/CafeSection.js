import React, { useState } from 'react';
import Grid from './Grid1';
import stores from '../../data';

const Restaurants = () => {
  const [storeItems, setStoreItems] = useState(stores);
  return (
    <section className='restaurants'>
      <div className='section__header__container'>
        <div className='section__header'>
          <h2>
            <span style={{ fontSize: '50px' }}>🍧</span>&nbsp;추천 카페
          </h2>
        </div>
        <div className='section__desc'>감성 넘치는 분위기 좋은 카페</div>
      </div>
      <Grid stores={storeItems} />
    </section>
  );
};

export default Restaurants;
