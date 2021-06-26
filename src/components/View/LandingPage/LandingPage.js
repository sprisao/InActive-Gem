import React, { useState, useEffect } from 'react';

import SearchBox from '../SearchPage/SearchBox';
import NewNavigation from '../../NewNavigation';
import RCCMD from './Sections/RCCMD/RCCMD';

import Separator from '../../Separator';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';

import './LandingPage.css';

const LandingPage = () => {
  const { mainLoading } = useGlobalContext();

  if (mainLoading) {
    return <Loading />;
  }
  return (
    <>
      <SearchBox />
      <NewNavigation />
      <Separator />
      <RCCMD
        title='점심 메뉴 추천!'
        slideType='type1'
        view='LunchRCCMD'
        category='맛집'
      />
      <Separator />
      <RCCMD
        title='빠르게 인기 카페 확인~'
        slideType='type2'
        view='CafeRCCMD'
        category='카페'
      />
    </>
  );
};

export default LandingPage;
