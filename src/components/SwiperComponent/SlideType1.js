import React from 'react';
import { Link } from 'react-router-dom';
import { HiBadgeCheck } from 'react-icons/hi';

import './SlideType1.css';

const SlideType1 = ({ store }) => {
  // let verfiedStore;
  // if (store.storeVerified === true) {
  //   verfiedStore = (
  //     <HiBadgeCheck style={{ fontSize: '1.75rem', color: 'white' }} />
  //   );
  // }
  return (
    <Link to={`/store/${store.id}`} className=''>
      <div
        className='SlideType1'
        style={{
          backgroundImage: `url(${store.images[0].url})`,
        }}
      >
        <div className='SlideType1__Container'>
          {/* {verfiedStore} */}
          <div className='SlideType1__articleContainer'>
            <div className='SlideType1__Tags'>
              {store.tags.map((tag) => {
                return <span key={tag}>#{tag} </span>;
              })}
            </div>
            <div className='SlideType1__storeName'>
              <h3>{store.name}</h3>
            </div>
            <span>{store.miniAddress}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SlideType1;
