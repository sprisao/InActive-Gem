import React from 'react';
import Loading from '../../Loading';

import { useGlobalContext } from '../../context';

import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const { categories, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <section className='navigation'>
      <div className='navigation__wrap'>
        {categories.map((category) => {
          return (
            <Link key={category.id} to={`/category/${category.ctgryTitle}`}>
              <div key={category.id} className='navigation__btn'>
                <img src={category.strIconSource} alt={category.ctgryTitle} />
                <span>{category.ctgryTitle}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Navigation;
