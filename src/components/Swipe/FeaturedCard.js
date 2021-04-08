import React from 'react';
import './FeaturedCard.css';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ id, img, title, category, location, desc }) => {
  return (
    <Link to={`/store/${id}`} className=''>
      <div className='featuredCard'>
        <div
          className='featuredCard_image'
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className='article'>
            <p>{desc}</p>
            <h2>{title}</h2>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default FeaturedCard;
