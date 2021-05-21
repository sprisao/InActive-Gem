import React, { useState } from 'react';

import { useGlobalContext } from '../../storeContext';
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
            props.category === secondCategory.firstCategory &&
            secondCategory.isActive === true
          )
            return (
              <button
                key={secondCategory.id}
                className='SeondCategory__item'
                onClick={() => sendSecondCategory({ secondCategory })}
              >
                {secondCategory.emoji}
                {secondCategory.title}
              </button>
            );
        })}
      </div>
    </section>
  );
};

export default Tags;
