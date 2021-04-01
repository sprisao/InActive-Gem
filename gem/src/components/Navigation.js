import React, { useState } from 'react';
import { category } from '../datafiles/categories';
import './Navigation.css';

const Navigation = () => {
  const [navigation, setNavigation] = useState(category);
  return (
    <section className='navigation'>
      <div className='navigation__wrap'>
        {navigation.map((category) => {
          return (
            <div key={category.idCategory} className='navigation__btn'>
              <img src={category.strIconSource} alt={category.strTitle} />
              <span>{category.strTitle}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Navigation;
