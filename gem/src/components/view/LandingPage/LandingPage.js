import React from 'react';
import Navigation from './Navigation';
import Tags from '../../Tags';
import News from './News';
import SectionGrid from '../../Grid/SectionGrid';
import SectionSlide from '../../Swipe/SectionSlide';

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Tags />
      <News />
      <SectionSlide section='new' filter='음식점' />
      <SectionSlide section='hot' filter='카페' />
      <SectionGrid section='restaurants' filter='음식점' />
      <SectionGrid section='cafes' filter='카페' />
    </div>
  );
};

export default LandingPage;
