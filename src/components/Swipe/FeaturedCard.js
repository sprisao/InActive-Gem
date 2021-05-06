import React from 'react';
import { Link } from 'react-router-dom';

import './FeaturedCard.css';

const FeaturedCard = ({ store }) => {
  return (
    <Link to={`/store/${store.id}`} className=''>
      <div
        className='featuredCard'
        style={{
          backgroundImage: `url(${store.fields.images[0].url})`,
        }}
      >
        <div className='featuredCard_image'>
          <div className='article'>
            <p>{store.fields.shortDescription}</p>
            <h3>{store.fields.name}</h3>
            <span>{store.fields.eupmyeondongRi}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default FeaturedCard;
