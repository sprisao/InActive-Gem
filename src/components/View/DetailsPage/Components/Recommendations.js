import React from 'react';
import DetailGrid from './DetailGrid';

import './Recommendations.css';

const Recommendations = (props) => {
  return (
    <section className='recommendation'>
      <h2>비슷한 가게들</h2>
      <DetailGrid filter={props.filter} self={props.self} />
    </section>
  );
};

export default Recommendations;
