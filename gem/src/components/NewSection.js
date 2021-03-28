import React, { useState } from 'react';
import Cardslider from './Cardslider';
import stores from '../data';

const Newstores = () => {
  const [storeItems, setStoreItems] = useState(stores);

  const filterItems = (category) => {
    const newItems = stores.filter((item) => item.category === category);
    setStoreItems(newItems);
  };

  return (
    <section className='new__stores'>
      <div className='section__header__container'>
        <div className='section__header'>
          <h2>
            <span style={{ fontSize: '50px' }}>✨</span>&nbsp;새로 오픈했어요!
          </h2>
        </div>
        <div className='section__desc'>
          원주에 새로생긴 매장을 제일 먼저 방문해보세요!
        </div>
      </div>
      <Cardslider stores={storeItems} />
    </section>
  );
};

export default Newstores;
