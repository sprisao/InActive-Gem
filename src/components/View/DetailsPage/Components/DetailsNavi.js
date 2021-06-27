import React from 'react';
import { useGlobalContext } from '../../../context';

import { Link } from 'react-router-dom';
import { FiChevronLeft, FiShare } from 'react-icons/fi';

import './DetailsNavi.css';

const DetailsNavi = (props) => {
  const { firstCategories, loading } = useGlobalContext();
  return (
    <section className='detailsNavi'>
      {firstCategories.map((category) => {
        if (category.firstCategory === props.categoryTitle) {
          return (
            <div className='detailsNavi__box'>
              <Link
                key={category.id}
                to={`/category/${props.categoryTitle}`}
                style={{ marginLeft: '-0.375rem' }}
              >
                <FiChevronLeft
                  style={{ fontSize: '1.85rem', color: '#454545' }}
                />
              </Link>
              <div className='detailsNavi__contents'>
                <p>{props.name}</p>
              </div>
              <FiShare
                style={{
                  fontSize: '1.35rem',
                  color: '#454545',
                  marginTop: '0.35rem',
                  cursor: 'pointer',
                  strokeWidth: '2.5px',
                }}
              />
            </div>
          );
        }
      })}
    </section>
  );
};

export default DetailsNavi;
