import React from 'react';
import { Link } from 'react-router-dom';
import { HiBadgeCheck } from 'react-icons/hi';

import './SlideType2.css';

const SlideType2 = ({ store }) => {
  // let verfiedStore;
  // if (store.storeVerified === true) {
  //   verfiedStore = <HiBadgeCheck />;
  // }
  return (
    <Link to={`/store/${store.id}`} className=''>
      <div
        className='SlideType2'
        style={{
          backgroundImage: `url(${store.images[0].url})`,
        }}
      >
        <div className='SlideType2_image'>
          <div className='SlideType2__articleContainer'>
            <div className='SlideType2__shortDesc'>
              <p>{store.shortDescription}</p>
            </div>
            <div className='SlideType2__storeName'>
              <h3>{store.name}</h3>
              {/* {verfiedStore} */}
            </div>
            <span>{store.miniAddress}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SlideType2;
