import React, { useState, useEffect } from 'react';

import Header from '../../Header';
import SearchBox from '../SearchPage/SearchBox';
import SearchResults from '../SearchPage/SearchResults';
import Home from '../../Home';
import RCCMD from './Sections/RCCMD/RCCMD';
import BottomNavigation from '../../BottomNavigation/BottomNavigation';
import Footer from '../../Footer';

import Separator from '../../Separator';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';

import './LandingPage.css';

const LandingPage = (history) => {
  const { promoLoading } = useGlobalContext();

  if (promoLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <SearchBox history={history} />
        {/* <Header /> */}
        <BottomNavigation activatedButton={'home'} />
        <Home history={history} />
        <Separator />
        <RCCMD
          title='새로 등록된 곳'
          slideType='type2'
          view='newStores'
          category='맛집'
        />

        <Footer />
      </>
    );
  }
  // }
};

export default LandingPage;
