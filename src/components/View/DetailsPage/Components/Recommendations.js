import React from 'react';
import DetailGrid from './DetailGrid';
import { FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import './Recommendations.css';

const Recommendations = (props) => {
  return (
    <section className='recommendation'>
      <div className='details__secition__header'>
        <h2>
          {props.emoji} {props.secondCategory} {props.firstCategory}
        </h2>
        <Link to={`/category/${props.firstCategory}/${props.secondCategory}`}>
          <div className='details__section__header__more'>
            <p>더 보기</p>
            <FiChevronRight style={{ fontSize: '1.3rem' }} />
          </div>
        </Link>
      </div>
      <DetailGrid
        filter={props.filter}
        filter2={props.filter2}
        self={props.self}
        length={7}
        categoryType='2'
      />
      <h2>✨ 이런 곳도 있어요!</h2>
      <DetailGrid
        filter={props.filter}
        filter2={props.filter2}
        self={props.self}
        length={10}
        categoryType='3'
      />
    </section>
  );
};

export default Recommendations;
