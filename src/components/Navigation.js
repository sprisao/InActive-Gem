import React, { useRef, useEffect } from 'react';
import Loading from './Loading';

import { useGlobalContext } from './context';

import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const { firstCategories, loading } = useGlobalContext();

  const headerRef = useRef(null);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className='navigation'>
      <div className='navigation__wrap'>
        {firstCategories.map((category) => {
          if (category.displayed === true)
            return (
              <Link
                key={category.id}
                to={`/category/${category.firstCategory}`}
              >
                <div key={category.id} className='navigation__btn'>
                  <div className='navigation__btn__imageContainer'>
                    <img
                      src={category.strIconSource[0].url}
                      alt={category.firstCategory}
                    />
                  </div>
                  <div className='navigation__btn__textContainer'>
                    <span>{category.firstCategory}</span>
                  </div>
                </div>
              </Link>
            );
          else return null;
        })}
      </div>
    </section>
  );
};

export default Navigation;
