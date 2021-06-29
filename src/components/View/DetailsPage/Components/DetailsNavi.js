import React from 'react';
import { useGlobalContext } from '../../../context';

import { Link } from 'react-router-dom';
import { FiChevronLeft, FiShare, FiBookmark } from 'react-icons/fi';

import './DetailsNavi.css';

const DetailsNavi = (props) => {
  const { firstCategories, loading } = useGlobalContext();
  return (
    <section className='detailsNavi'>
      {firstCategories.map((category) => {
        if (category.firstCategory === props.categoryTitle) {
          return (
            <div className='detailsNavi__box'>
              <Link key={category.id} to={`/category/${props.categoryTitle}`}>
                <div className='Details__Backward'>
                  <FiChevronLeft
                    style={{ fontSize: '1.85rem', color: '#454545' }}
                  />
                </div>
              </Link>
              <div className='detailsNavi__contents'>
                <h3>{props.name}</h3>
              </div>
              {/* <FiShare
                style={{
                  fontSize: '1.35rem',
                  color: '#454545',
                  marginTop: '0.35rem',
                  cursor: 'pointer',
                  strokeWidth: '2.5px',
                }}
              /> */}
              <div className='Details__Save'>
                <FiBookmark
                  style={{
                    fontSize: '1.85rem',
                    strokeWidth: '1.25px',
                  }}
                />
              </div>
            </div>
          );
        }
      })}
    </section>
  );
};

export default DetailsNavi;
