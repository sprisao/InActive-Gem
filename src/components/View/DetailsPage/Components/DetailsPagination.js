import React from 'react';

import { Link } from 'react-router-dom';

import './DetailsPagination.css';

const DetailsPagination = ({ storeId }) => {
  console.log(storeId);
  return (
    <>
      <section className='DetailsPagination'>
        <div className='PaginationWrapper'>
          <div
            className='Pagination-Header'
            style={{ backgroundColor: 'violet' }}
          >
            소개
          </div>
          <Link to={`/store/${storeId}/eventList`}>
            <div className='Pagination-Header'>이벤트</div>
          </Link>
          <div
            className='Pagination-Header'
            style={{ backgroundColor: 'violet' }}
          >
            정보
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPagination;
