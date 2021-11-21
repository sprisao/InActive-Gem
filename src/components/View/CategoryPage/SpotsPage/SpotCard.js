import React from 'react';

import './SpotCard.css';

const SpotCard = ({ spot }) => {
  console.log(spot.isFree);
  return (
    <div>
      <section className='SpotCard'>
        <div className='SpotCard-ImageContainer'>
          <img src={spot.images[0].url} alt='' />
        </div>
        <div className='SpotCard-ArticleContainer'>
          <div className='SpotCard_Header'>
            <h3>{spot.name}</h3>
          </div>
          <div className='SpotCard_Article'>
            {/* {spot.isFree ? (
              <span className='free'>무료</span>
            ) : (
              <span className='not-free'>유료</span>
            )} */}
            <span>{spot.miniAddress}</span>
            <p>{spot.shortDescription}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpotCard;
