import React from 'react';
import SectionHeader from '../SectionHeader';
import SlideWrapper from '../../../../SwiperComponent/SlideWrapper';

import './RCCMD.css';

const RCCMD = (props) => {
  return (
    <section className='RCCMD'>
      <SectionHeader title={props.title} category={props.category} />
      <SlideWrapper slideType={props.slideType} view={props.view} />
    </section>
  );
};

export default RCCMD;
