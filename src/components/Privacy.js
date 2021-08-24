import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Privacy = () => {
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
        src='https://res.cloudinary.com/diimwnnmj/image/upload/v1629781258/PrivacyPolicy_homwh9.jpg'
        alt='개인정보취급방침'
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default Privacy;
