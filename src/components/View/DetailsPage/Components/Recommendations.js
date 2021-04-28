import React from 'react';
import DetailGrid from './DetailGrid';

import './Recommendations.css';

const Recommendations = (props) => {
  return (
    <section className='recommendation'>
      <h1>비슷한 가게들</h1>
      <DetailGrid filter={props.filter} />
    </section>
  );
};

export default Recommendations;
