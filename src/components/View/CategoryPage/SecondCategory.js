import React from 'react';

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './SecondCategory.css';

const SecondCategory = (props) => {
  const { secondCategories } = useGlobalContext();
  const sendSecondCategory = (text) => {
    props.getSecondCategory(text);
  };

  return (
    <section className='SeondCategory'>
      <div className='SeondCategory__container'>
        <button
          className='SeondCategory__item'
          onClick={() => sendSecondCategory('전체')}
        >
          🅰️ 전체
        </button>
        {secondCategories.map((secondCategory) => {
          if (
            props.category === secondCategory.firstCategory[0] &&
            secondCategory.isActive === true
          )
            return (
              <button
                key={secondCategory.id}
                className='SeondCategory__item'
                onClick={() => sendSecondCategory(secondCategory.title)}
              >
                {secondCategory.emoji}&nbsp;{secondCategory.title}
              </button>
            );
          else return null;
        })}
      </div>
    </section>
  );
};

export default SecondCategory;
