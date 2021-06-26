import React, { useState, useEffect } from 'react';

import SearchBox from '../SearchPage/SearchBox';
import NewNavigation from '../../NewNavigation';
import LunchRCCMD from './Sections/LunchRCCMD/LunchRCCMD';

import Separator from '../../Separator';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';

import './LandingPage.css';

const LandingPage = () => {
  const { mainStores, mainLoading } = useGlobalContext();
  const [page, setPage] = useState(false);

  if (mainLoading) {
    return <Loading />;
  }
  return (
    <>
      <SearchBox />
      <NewNavigation />
      <Separator />
      <LunchRCCMD />
      <Separator />
    </>
  );
};

export default LandingPage;
