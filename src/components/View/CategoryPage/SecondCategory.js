import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './SecondCategory.css';

const Tags = (props) => {
  const { secondCategories, firstCategories } = useGlobalContext();
  const sendSecondCategory = (text) => {
    props.getSecondCategory(text);
  };

  return (
    <section className='SeondCategory'>
      <div className='SeondCategory__container'>
        {secondCategories.map((secondCategory) => {
          if (
            props.category === secondCategory.firstCategory[0] &&
            secondCategory.isActive === true
          )
            return (
              <Link
                key={secondCategory.id}
                to={`/category/${secondCategory.firstCategory}/${secondCategory.title}`}
              >
                <button
                  key={secondCategory.id}
                  className='SeondCategory__item'
                  onClick={() => sendSecondCategory(secondCategory.title)}
                >
                  {secondCategory.emoji}
                  {secondCategory.title}
                </button>
              </Link>
            );
        })}
      </div>
    </section>
  );
};

export default Tags;
