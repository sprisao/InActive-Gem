import React from 'react';
import { useGlobalContext } from '../../../storeContext';

import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import './DetailsNavi.css';

const DetailsNavi = (props) => {
  const { firstCategories, loading } = useGlobalContext();
  return (
    <section className='detailsNavi'>
      <Link to={`/category/${props.categoryTitle}`}>
        {firstCategories.map((category) => {
          if (category.ctgryTitle === props.categoryTitle) {
            return (
              <div key={category.id} className='detailsNavi__box'>
                <FiChevronLeft className='detailsNavi__icon' />
                <div className='detailsNavi__contents'>
                  {/* <img
                    src={category.strIconSource}
                    alt='{props.categoryTitle}'
                  /> */}
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
