import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import './GridCard.css';

const GridCard = ({ store, tags }) => {
  let verfiedStore;
  if (store.storeVerified === true) {
    verfiedStore = <HiBadgeCheck />;
  }
  console.log(store.storeVerified);

  return (
    <Link to={`/store/${store.id}`} className=''>
      <article className='gridCard'>
        <img src={store.images[0].url} alt={store.name} />
        <div className='tags'>
          {tags.map((tag) => {
            return <span key={tag}>#{tag} </span>;
          })}
        </div>
        <div className='storeName'>
          <h3>{store.name}</h3>
          {verfiedStore}
        </div>
        <div className='quickInfos'>
          <span>{store.eupmyeondongRi}</span>
        </div>
        <div className='shortDesc'>
          <p>{store.shortDescription}</p>
        </div>
      </article>
    </Link>
  );
};

export default GridCard;
