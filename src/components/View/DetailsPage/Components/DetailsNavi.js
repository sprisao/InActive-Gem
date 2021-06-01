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
                <div className='detailsNavi__icon'>
                  <img
                    src='https://res.cloudinary.com/diimwnnmj/image/upload/v1622513949/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%8B%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3_3_zqkqpv.png'
                    alt='뒤로가기'
                  />
                </div>
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
