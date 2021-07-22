import React from 'react';
import { Link } from 'react-router-dom';

import './SlideType1.css';

const SlideType1 = ({ store }) => {
  return (
    <Link to={`/store/${store.id}`}>
      <div
        className='SlideType1'
        style={{
          backgroundImage: `url(${store.images[0].url})`,
        }}
      >
        <div className='SlideType1__Container'>
          <div className='SlideType1__articleContainer'>
            <div className='SlideType1__Tags'>
              {store.tags.map((tag) => {
                return <span key={tag}>#{tag} </span>;
              })}
            </div>
            <div className='SlideType1__storeName'>
              <h3>{store.name}</h3>
            </div>
            <span>{store.miniAddress}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SlideType1;
