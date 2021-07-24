import React from 'react';

import { FiChevronLeft, FiBookmark } from 'react-icons/fi';

import './DetailsNavi.css';

const DetailsNavi = (props) => {
  const history = props.history;

  const goBack = () => {
    history.goBack();
  };

  return (
    <section className='detailsNavi'>
      <div className='detailsNavi__box'>
        <div className='Details__Backward' onClick={goBack}>
          <FiChevronLeft style={{ fontSize: '1.85rem', color: '#454545' }} />
        </div>
        <div className='detailsNavi__contents'>
          <p>{props.name}</p>
        </div>
        <div className='Details__Save'>
          <FiBookmark
            style={{
              fontSize: '1.85rem',
              strokeWidth: '1.25px',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DetailsNavi;
