import React from 'react';
import './FeaturedCard.css';
import { Link } from 'react-router-dom';

const FeaturedCard = ({
  id,
  img,
  name,
  ctgry,
  eupmyeondongRi,
  shortDescription,
}) => {
  return (
    <Link to={`/store/${id}`} className=''>
      <div className='featuredCard'>
        <div
          className='featuredCard_image'
          style={{
            backgroundImage: `url(${img[0]})`,
          }}
        >
          <div className='article'>
            <p>{shortDescription}</p>
            <h2>{name}</h2>
            <span>{eupmyeondongRi}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default FeaturedCard;
