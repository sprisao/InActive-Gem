import React from 'react';
import DetailGrid from './DetailGrid';

import './Recommendations.css';

const Recommendations = (props) => {
  return (
    <section className='recommendation'>
      <h2>
        {props.emoji} {props.secondCategory} {props.firstCategory}
      </h2>
      <DetailGrid filter={props.filter} self={props.self} length={7} />
    </section>
  );
};

export default Recommendations;
