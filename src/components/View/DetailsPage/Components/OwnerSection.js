import React from 'react';

import './OwnerSection.css';

const OwnerSection = (props) => {
  return (
    <div className='OwnerSection'>
      <div className='ownerProfile__conatiner'>
        <div className='ownerImage__container'>
          <img src={props.ownerImage} alt='' />
        </div>
        <div className='ownerName__container'>
          <p>사장님</p>
        </div>
        <div className='ownerName'></div>
      </div>
      <div className='ownerMessage__container'>
        <p>"{props.ownerMessage}"</p>
      </div>
    </div>
  );
};

export default OwnerSection;
