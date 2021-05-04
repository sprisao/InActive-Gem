import React from 'react';
import './FeaturedCard.css';
import { Link } from 'react-router-dom';

const FeaturedCard = ({
  id,
  name,
  mainImage,
  eupmyeondongRi,
  shortDescription,
}) => {
  return (
    <Link to={`/store/${id}`} className=''>
      <div
        className='featuredCard'
        style={{
          backgroundImage: `url(${mainImage})`,
        }}
      >
        <div className='featuredCard_image'>
          <div className='article'>
            <p>{shortDescription}</p>
            <h3>{name}</h3>
            <span>{eupmyeondongRi}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default FeaturedCard;
