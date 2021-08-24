import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import './DetailsHeader.css';

const DetailsHeader = (props) => {
  // 인증업체여부 필터링
  let verfiedStore;
  if (props.storeVerified === true) {
    verfiedStore = (
      <HiBadgeCheck style={{ fontSize: '1rem', color: '#f21d73' }} />
    );
  }

  let isBranch;
  if (props.branch) {
    isBranch = (
      <div className='details__tag'>
        <p>
          {props.locationCategory} ・ {props.branch}
        </p>
      </div>
    );
  } else {
    isBranch = (
      <div className='details__tag'>
        <p>{props.locationCategory}</p>
      </div>
    );
  }

  return (
    <div className='details__Header'>
      <div className='details__Header__Container'>
        <div className='details__shortDesc'>
          <h4>{props.shortDescription}</h4>
        </div>
        <div className='details__name'>
          <h3>{props.name}</h3>
          {verfiedStore}
        </div>
        {isBranch}
      </div>
    </div>
  );
};

export default DetailsHeader;
