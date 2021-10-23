import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import { BiWon } from 'react-icons/bi';

import './GridCard.css';

const GridCard = ({ store }) => {
  // 인증업체 필터

  const onePersonPriceWon = (store.onePersonPrice * 1000).toLocaleString(
    'ko-KR'
  );

  let preRank;
  if (store.preRating > 8) {
    preRank = <span>🏅🏅🏅</span>;
  } else if (store.preRating > 6) {
    preRank = <span>🏅🏅</span>;
  } else if (store.preRating > 3) {
    preRank = <span>🏅</span>;
  } else preRank = null;

  let verfiedStore;
  if (store.storeVerified === true) {
    verfiedStore = <HiBadgeCheck />;
  }

  // 영업시간 필터
  let businessHour;
  if (store.openHour) {
    businessHour = (
      <div className='quickInfos__businessHours'>
        <FiClock />
        &nbsp;{store.openHour} ~ {store.closeHour}
      </div>
    );
  }

  let branch;
  if (store.branch) {
    branch = <p>・ {store.branch}</p>;
  }

  return (
    <Link to={`/store/${store.id}/details`} className=''>
      <div className='gridCard'>
        <div className='gridCard__imageContainer'>
          <img src={store.images[0].url} alt={store.name} />
        </div>
        <div className='gridCard__articleContainer'>
          <div className='tags'></div>
          <div className='quickInfos__location'>
            <span>{store.miniAddress}</span>
            {branch}
          </div>
          <div className='storeName'>
            <h3>{store.name}</h3>
            {verfiedStore}
          </div>
          <div className='quickInfos'>
            <div className='rating'>{preRank}</div>
            {!store.onePersonPrice || store.onePersonPrice === 0 ? null : (
              <div className='onePersonPrice'>
                <BiWon
                  style={{ marginRight: '0.2rem', fontSize: '1..25rem' }}
                />
                <span>{onePersonPriceWon} ~</span>
              </div>
            )}
            {businessHour}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GridCard;
