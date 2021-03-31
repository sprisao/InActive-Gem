import React, { useState } from 'react';
import Cardslider2 from './Cardslider2';
import stores from '../../data';

const Hotstores = () => {
  const [storeItems, setStoreItems] = useState(stores);
  return (
    <section className='hot__stores'>
      <div className='section__header__container'>
        <div className='section__header'>
          <h2>
            <span style={{ fontSize: '50px' }}>🔥</span>&nbsp;요즘 핫하다는 그
            곳!
          </h2>
        </div>
        <div className='section__desc'>원주사람들은 한번씩 다 가봤데요~</div>
      </div>
      <Cardslider2 stores={storeItems} />
    </section>
  );
};

export default Hotstores;
