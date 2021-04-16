import React, { useState } from 'react';
import { category } from '../../../datafiles/categories';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [navigation, setNavigation] = useState(category);
  return (
    <section className='navigation'>
      <div className='navigation__wrap'>
        {navigation.map((category) => {
          return (
            <Link key={category.id} to={`/category/${category.id}`}>
              <div key={category.id} className='navigation__btn'>
                <img src={category.strIconSource} alt={category.title} />
                <span>{category.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Navigation;
