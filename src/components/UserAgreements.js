import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const UserAgreements = () => {
  return (
    <div style={{ width: 'var(--normalWidth', margin: '0 auto ' }}>
      <Link to={`/`}>
        <div className='backNavi' style={{ padding: '1rem' }}>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '100%',
              textAlign: 'left',
            }}
          >
            <FiChevronLeft style={{ fontSize: '1.8rem' }} />
          </button>
        </div>
      </Link>
      <img
        src='https://res.cloudinary.com/diimwnnmj/image/upload/v1629782306/%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8B%E1%85%A3%E1%86%A8%E1%84%80%E1%85%AA%E1%86%AB_zhlkoa.jpg'
        alt='개인정보취급방침'
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default UserAgreements;
