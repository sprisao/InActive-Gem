import React from 'react';
import Navigation from './Navigation';
import SectionHeader from '../../../components/SectionHeader/Title';
import Grid from '../../Grid/Grid';
import Slide from '../../Swipe/Slide';

import './LandingPage.css';
const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <SectionHeader title='인기카페' emoji='' desc='원주 최고의 인기카페' />
      <Slide section='hot' filter='카페' />
      <Grid filter='맛집' />

      <Grid section='cafes' filter='카페' />
    </div>
  );
};

export default LandingPage;
