import React from 'react';
import SectionHeader from '../SectionHeader';
import SlideWrapper from '../../../../SwiperComponent/SlideWrapper';

import './LunchRCCMD.css';

const LunchRCCMD = () => {
  return (
    <section className='LunchRCCMD'>
      <SectionHeader title={'점심 메뉴 추천!'} />
      <SlideWrapper slideType={'type1'} view={'LunchRCMMD'} />
    </section>
  );
};

export default LunchRCCMD;
