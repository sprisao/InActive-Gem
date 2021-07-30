import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './SecondCategory.css';

const SecondCategory = (props) => {
  const { secondCategories } = useGlobalContext();
  const defaultSecondCategory = props.secondCategory;
  const [focused, setFocused] = useState(defaultSecondCategory);

  const onFocus = (id) => {
    setFocused(id);
  };

  return (
    <section className='SeondCategory'>
      <div className='SeondCategory__container'>
        <Link to={`/category/${props.category}/${props.locationCategory}/전체`}>
          <button
            className={
              focused === '전체'
                ? 'SeondCategory__item__clicked'
                : 'SeondCategory__item'
            }
            tabIndex='0'
            onClick={() => onFocus('전체')}
          >
            🅰️ 전체
          </button>
        </Link>

        {secondCategories.map((secondCategory) => {
          if (
            props.category === secondCategory.firstCategory[0] &&
            secondCategory.isActive === true
          )
            return (
              <Link
                key={secondCategory.id}
                to={`/category/${props.category}/${props.locationCategory}/${secondCategory.title}`}
              >
                <button
                  tabIndex='0'
                  key={secondCategory.id}
                  className={
                    focused === secondCategory.title
                      ? 'SeondCategory__item__clicked'
                      : 'SeondCategory__item'
                  }
                  onClick={() => onFocus(secondCategory.title)}
                >
                  {secondCategory.emoji}&nbsp;{secondCategory.title}
                </button>
              </Link>
            );
          else return null;
        })}
      </div>
    </section>
  );
};

export default SecondCategory;
