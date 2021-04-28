import React from 'react';
import { Link } from 'react-router-dom';

import './GridCard.css';

const GridCard = ({
  id,
  img,
  name,
  ctgry,
  eupmyeondongRi,
  shortDescription,
}) => {
  return (
    <Link to={`/store/${id}`} className=''>
      <article className='gridCard'>
        <div className='imageContainer'>
          <img src={img[0]} alt='' />
        </div>
        <div className='articleContainer'>
          <h2>{name}</h2>
          <span>{eupmyeondongRi}</span>
          <p>{shortDescription}</p>
        </div>
      </article>
    </Link>
  );
};

export default GridCard;
