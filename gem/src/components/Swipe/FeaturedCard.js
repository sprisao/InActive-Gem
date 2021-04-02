import React from 'react';
import './FeaturedCard.css';

const FeaturedCard = ({ img, title, category, location, desc }) => {
  return (
    <div className='featuredCard'>
      <div
        className='featuredCard_image'
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className='article'>
          <p>{desc}</p>
          <h1>{title}</h1>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};
export default FeaturedCard;
