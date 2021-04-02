import React from 'react';
import Title from '../Title';
import Slide from './Slide';
import { copywrites } from '../../datafiles/copywrites';

const SectionSlide = (props) => {
  return (
    <section className='title'>
      {copywrites.map((copywrites, index) => {
        if (copywrites.section === props.section)
          return <Title key={copywrites.id} {...copywrites}></Title>;
      })}
      <Slide filter={props.filter} />
    </section>
  );
};

export default SectionSlide;
