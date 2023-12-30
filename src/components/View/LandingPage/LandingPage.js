import React from 'react';

import SearchBox from '../SearchPage/SearchBox';
import Home from '../../Home';
import RCCMD from './Sections/RCCMD/RCCMD';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import Footer from '../../Footer';

import Separator from '../../Separator';

import './LandingPage.css';

const LandingPage = (history) => {
  return (
    <>
      <SearchBox history={history} />
      {/* <Header /> */}
      <BottomNavigation activatedButton={'home'} />
      <Home history={history} />
      <Footer />
    </>
  );
  // }
};

export default LandingPage;
