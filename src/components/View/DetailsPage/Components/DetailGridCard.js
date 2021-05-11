import React from 'react';
import { Link } from 'react-router-dom';

import './DetailGridCard.css';

const DetailGridCard = ({ store, tags }) => {
  return (
    <Link to={`/store/${store.id}`} className=''>
      <article className='detail__gridCard'>
        <div className='imageContainer'>
          <img src={store.fields.images[0].url} alt={store.fields.name} />
        </div>

        <div className='articleContainer'>
          <div className='tags'>
            {tags.map((tag) => {
              return <span key={tag}>#{tag} </span>;
            })}
          </div>
          <h2>{store.fields.name}</h2>
          <span>{store.fields.eupmyeondongRi}</span>
          <p>{store.fields.shortDescription}</p>
        </div>
      </article>
    </Link>
  );
};

export default DetailGridCard;
