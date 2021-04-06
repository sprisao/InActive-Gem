import React from 'react';
import { Link } from 'react-router-dom';

import './GridCard.css';

const GridCard = ({ id, img, title, category, location, desc }) => {
  return (
    <Link to={`/store/${id}`} className=''>
      <article className='gridCard'>
        <img src={img} alt='' />
        <h3>{title}</h3>
        <span>{location}</span>
        <p>{desc}</p>
      </article>
    </Link>
  );
};

export default GridCard;
