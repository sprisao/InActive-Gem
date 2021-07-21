import React, { useRef } from 'react';

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './SecondCategory.css';

const SecondCategory = (props) => {
  const { secondCategories } = useGlobalContext();

  const buttonRef = useRef(null);
  function handleFocus() {
    buttonRef.current.focus();
  }

  return (
    <section className='SeondCategory'>
      <div className='SeondCategory__container'>
        <Link to={`/category/${props.category}/${props.locationCategory}/전체`}>
          <button
            ref={buttonRef}
            onClick={handleFocus}
            className='SeondCategory__item'
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
                  key={secondCategory.id}
                  className='SeondCategory__item'
                  ref={buttonRef}
                  onClick={handleFocus}
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
