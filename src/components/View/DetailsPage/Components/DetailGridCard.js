import React from 'react';
import { Link } from 'react-router-dom';

import './DetailGridCard.css';

const DetailGridCard = ({ store, tags }) => {
  return (
    <Link to={`/store/${store.id}`} className=''>
      <article className='detail__gridCard'>
        <div className='imageContainer'>
          <img src={store.images[0].url} alt={store.name} />
        </div>

        <div className='articleContainer'>
          <div className='tags'>
            {tags.map((tag) => {
              return <span key={tag}>#{tag} </span>;
            })}
          </div>
          <h3>{store.name}</h3>
          <span>{store.miniAddress}</span>
          <p>{store.shortDescription}</p>
        </div>
      </article>
    </Link>
  );
};

export default DetailGridCard;
