import React from 'react';
import Title from '../Title';
import Grid from './Grid';

const SectionGrid = (props) => {
  return (
    <section className='title'>
      {/* {copywrites.map((copywrites) => {
        if (copywrites.section === props.section)
          return <Title key={copywrites.id} {...copywrites}></Title>;
      })} */}
    </section>
  );
};

export default SectionGrid;
