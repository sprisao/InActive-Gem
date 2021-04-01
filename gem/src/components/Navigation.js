import React, { useState } from 'react';
import { category } from '../datafiles/categories';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [navigation, setNavigation] = useState(category);
  return (
    <section className='navigation'>
      <div className='navigation__wrap'>
        {navigation.map((category) => {
          return (
            <Link to={`/category/$[category.idCategory}`}>
              <div key={category.idCategory} className='navigation__btn'>
                <img src={category.strIconSource} alt={category.strTitle} />
                <span>{category.strTitle}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Navigation;
