import React from 'react';

import './OwnerSection.css';

const OwnerSection = (props) => {
  return (
    <div className='OwnerSection'>
      <div className='ownerImage__container'>
        <img src={props.imageOwner} alt='' />
        <div className='ownerName'>
          <p>최ㅇㅇ 사장님</p>
        </div>
      </div>
      <div className='ownerMessage__container'>
        <p>"{props.ownerMessage}"</p>
      </div>
    </div>
  );
};

export default OwnerSection;
