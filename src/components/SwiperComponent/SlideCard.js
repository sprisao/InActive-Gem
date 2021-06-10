import React from 'react';
import { Link } from 'react-router-dom';
import { HiBadgeCheck } from 'react-icons/hi';

import './SlideCard.css';

const FeaturedCard = ({ store }) => {
  let verfiedStore;
  if (store.storeVerified === true) {
    verfiedStore = <HiBadgeCheck />;
  }
  return (
    <Link to={`/store/${store.id}`} className=''>
      <div
        className='featuredCard'
        style={{
          backgroundImage: `url(${store.images[0].url})`,
        }}
      >
        <div className='featuredCard_image'>
          <div className='featuredCard__articleContainer'>
            <div className='featuredCard__shortDesc'>
              <p>{store.shortDescription}</p>
            </div>
            <div className='featuredCard__storeName'>
              <h3>{store.name}</h3>
              {verfiedStore}
            </div>
            <span>{store.miniAddress}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default FeaturedCard;
