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
        {categories.map((item) => {
          return (
            <Link key={item.id} to={`/category/${item.id}`}>
              <div key={item.id} className='navigation__btn'>
                <img src={item.strIconSource} alt={item.ctgryTitle} />
                <span>{item.ctgryTitle}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Navigation;
