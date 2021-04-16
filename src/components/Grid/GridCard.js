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
        <img src={img[0]} alt='' />
        <h3>{name}</h3>
        <span>{eupmyeondongRi}</span>
        <p>{shortDescription}</p>
      </article>
    </Link>
  );
};

export default GridCard;
