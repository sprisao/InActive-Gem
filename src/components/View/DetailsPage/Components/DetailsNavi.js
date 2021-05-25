import React from 'react';
import { useGlobalContext } from '../../../context';

import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import './DetailsNavi.css';

const DetailsNavi = (props) => {
  const { firstCategories, loading } = useGlobalContext();
  return (
    <section className='detailsNavi'>
      {firstCategories.map((category) => {
        if (category.firstCategory === props.categoryTitle) {
          return (
            <Link key={category.id} to={`/category/${props.categoryTitle}`}>
              <div className='detailsNavi__box'>
                <FiChevronLeft className='detailsNavi__icon' />
                <div className='detailsNavi__contents'>
                  <p>{props.categoryTitle}</p>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </section>
  );
};

export default DetailsNavi;
