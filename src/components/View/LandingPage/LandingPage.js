import React from 'react';
import Navigation from './Navigation';
import Grid from '../../Grid/Grid';
import Slide from '../../Swipe/Slide';

import './LandingPage.css';
const LandingPage = () => {
  return (
    <div>
      <Navigation />
      {/* <News /> */}
      {/* <Slide section='new' filter='rstrn' /> */}
      <Slide section='hot' filter='카페' />
      <Grid filter='맛집' />

      <Grid section='cafes' filter='카페' />
    </div>
  );
};

export default LandingPage;
