import React from 'react';

import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';

import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import SearchBox from '../SearchPage/SearchBox';

import './CategorySelectPage.css';

const CategorySelectPage = (history) => {
  const { firstCategory } = useParams();
  const { secondCategories } = useGlobalContext();

  const filteredSCategory = secondCategories.filter(
    (category) => category.firstCategory === firstCategory
  );

  const clickHandler = (param) => {
    history.history.push(`/category/${firstCategory}/전체/${param}`);
  };

  return (
    <>
      <SearchBox history={history} />
      <BottomNavigation />
      <section className='categorySelect'>
        <div className='Select-Wrapper'>
          <div className='Select-Box' onClick={(e) => clickHandler('전체', e)}>
            <span>🅰️</span>
            <p>전체</p>
          </div>
          {filteredSCategory.map((item) => {
            console.log(item);
            return (
              <div
                className='Select-Box'
                onClick={(e) => clickHandler(item.title, e)}
                key={item.id}
              >
                <span>{item.emoji}</span>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CategorySelectPage;
