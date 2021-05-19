import React from 'react';
import { Link } from 'react-router-dom';

import './FeaturedCard.css';

const FeaturedCard = ({ store }) => {
  return (
    <Link to={`/store/${store.id}`} className=''>
      <div
        className='featuredCard'
        style={{
          backgroundImage: `url(${store.images[0].url})`,
        }}
      >
        <div className='featuredCard_image'>
          <div className='article'>
            <p>{store.shortDescription}</p>
            <h3>{store.name}</h3>
            <span>{store.eupmyeondongRi}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default FeaturedCard;
