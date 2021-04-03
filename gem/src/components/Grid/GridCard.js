import React from 'react';
import { Link } from 'react-router-dom';

import './GridCard.css';

const GridCard = ({ id, img, title, category, location, desc }) => {
  return (
    <article className='gridCard'>
      <img src={img} alt='' />
      <h4>{title}</h4>
      <span>{location}</span>
      <p>{desc}</p>
      <Link to={`/store/${id}`} className=''>
        details
      </Link>
    </article>
  );
};

export default GridCard;
