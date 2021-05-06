import React from 'react';
import Navigation from './Navigation';
import Tags from '../../Tags';
import News from './News';
import SectionGrid from '../../Grid/SectionGrid';
import SectionSlide from '../../Swipe/SectionSlide';

import './LandingPage.css';
const LandingPage = () => {
  return (
    <div>
      <Navigation />
      {/* <div className='Tags__Container'>
        <Tags />
      </div> */}
      <News />
      {/* <SectionSlide section='new' filter='rstrn' /> */}
      <SectionSlide section='hot' filter='카페' />
      <SectionGrid section='restaurants' filter='음식점' />
      <SectionGrid section='cafes' filter='카페' />
    </div>
  );
};

export default LandingPage;
