import React from 'react';
import { categories } from '../../../../datafiles/categories';

import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import './DetailsNavi.css';

const DetailsNavi = (props) => {
  return (
    <section className='detailsNavi'>
      <Link to={`/category/${props.categoryNumber}`}>
        {categories.map((category) => {
          if (category.id === props.categoryNumber) {
            return (
              <div className='detailsNavi__box'>
                <FiChevronLeft className='detailsNavi__icon' />
                <div className='detailsNavi__contents'>
                  <img
                    src={category.strIconSource}
                    alt='{props.categoryTitle}'
                  />
                  <p>{props.categoryTitle}</p>
                </div>
              </div>
            );
          }
        })}
      </Link>
    </section>
  );
};

export default DetailsNavi;
