import React from 'react';
import { Link } from 'react-router-dom';

import './GridCard.css';

const GridCard = ({ store }) => {
  return (
    <Link to={`/store/${store.id}`} className=''>
      <article className='gridCard'>
        <img src={store.fields.images[0].url} alt='' />
        <h3>{store.fields.name}</h3>
        <span>{store.fields.eupmyeondongRi}</span>
        <p>{store.fields.shortDescription}</p>
      </article>
    </Link>
  );
};

export default GridCard;
