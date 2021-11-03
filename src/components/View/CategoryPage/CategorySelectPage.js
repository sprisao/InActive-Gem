import React from 'react';

import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';

import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import SearchBox from '../SearchPage/SearchBox';

import './CategorySelectPage.css';

const CategorySelectPage = (history) => {
  const { firstCategory } = useParams();
  const { secondLoading, secondCategories } = useGlobalContext();

  const filteredSCategory = secondCategories.filter(
    (category) => category.firstCategory[0] === firstCategory
  );

  const clickHandler = (param, e) => {
    console.log(e);
    history.history.push(`/category/${firstCategory}/전체/${param}`);
  };

  return (
    <>
      <SearchBox />
      <BottomNavigation />
      <section className='categorySelect'>
        <div className='Select-Wrapper'>
          {filteredSCategory.map((item) => {
            return (
              <div
                className='Select-Box'
                onClick={(e) => clickHandler(item.title, e)}
              >
                <p>{item.title}</p>
                <span>{item.emoji}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CategorySelectPage;
