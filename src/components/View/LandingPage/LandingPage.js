import React from 'react';

import SearchBox from '../SearchPage/SearchBox';
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
  // }
};

export default LandingPage;
