import React from 'react';

import { Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

const SpotsCategoryHeader = () => {
  return (
    <>
      <div className='Category__Header__Wrapper'>
        <div className='Category__Header'>
          <Link to={`/sightseeing`}>
            <button className='Category__Backward'>
              <FiChevronLeft style={{ fontSize: '1.8rem', color: '#000' }} />
            </button>
          </Link>
          <div className='Category__Title'>
            <h3>가볼만한 곳</h3>
          </div>
          <div style={{ width: '7rem' }}></div>
        </div>
      </div>
    </>
  );
};

export default SpotsCategoryHeader;
