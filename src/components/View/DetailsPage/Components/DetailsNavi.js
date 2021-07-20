import React from 'react';

import { Link } from 'react-router-dom';
import { FiChevronLeft, FiBookmark } from 'react-icons/fi';

import './DetailsNavi.css';

const DetailsNavi = (props) => {
  return (
    <section className='detailsNavi'>
      <div className='detailsNavi__box'>
        <Link
          to={`/category/${props.category}/${props.locationCategory}/${props.secondCategory}`}
        >
          <div className='Details__Backward'>
            <FiChevronLeft style={{ fontSize: '1.85rem', color: '#454545' }} />
          </div>
        </Link>
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
