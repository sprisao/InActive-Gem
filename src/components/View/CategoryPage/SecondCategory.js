import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router-dom';
import './SecondCategory.css';

const SecondCategory = (props) => {
  const { secondCategory, locationCategory } = useParams();
  const { secondCategories } = useGlobalContext();
  const [focused, setFocused] = useState(secondCategory);

  useEffect(() => {
    setFocused(secondCategory);
  }, [secondCategory]);

  return (
    <section className='SeondCategory'>
      <div className='SecondCategory__container'>
        <Link to={`/category/${props.category}/${locationCategory}/전체`}>
          <button
            className={
              focused === '전체'
                ? 'SecondCategory__item__clicked'
                : 'SecondCategory__item'
            }
            tabIndex='0'
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
                to={`/category/${props.category}/${locationCategory}/${secondCategory.title}`}
              >
                <button
                  tabIndex='0'
                  key={secondCategory.id}
                  className={
                    focused === secondCategory.title
                      ? 'SecondCategory__item__clicked'
                      : 'SecondCategory__item'
                  }
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
