import React from 'react';
import Grid from './Grid';

import './Recommendations.css';

const Recommendations = (props) => {
  return (
    <section className='recommendation'>
      <h1>비슷한 가게들</h1>
      <Grid filter={props.filter} />
    </section>
  );
};

export default Recommendations;
