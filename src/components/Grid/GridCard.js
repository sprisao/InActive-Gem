import React from 'react';
import { Link } from 'react-router-dom';

import './GridCard.css';

const GridCard = ({ store, tags }) => {
  return (
    <Link to={`/store/${store.id}`} className=''>
      <article className='gridCard'>
        <img src={store.images[0].url} alt={store.name} />
        <div className='tags'>
          {tags.map((tag) => {
            return <span key={tag}>#{tag} </span>;
          })}
        </div>
        <h3>{store.name}</h3>
        <span>{store.eupmyeondongRi}</span>
        <p>{store.shortDescription}</p>
      </article>
    </Link>
  );
};

export default GridCard;
