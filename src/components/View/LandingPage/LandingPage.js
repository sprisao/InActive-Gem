import React, { useState, useEffect } from 'react';

import SearchBox from '../SearchPage/SearchBox';
import NewNavigation from '../../NewNavigation';
import Separator from '../../Separator';

import Loading from '../../Loading';
import { useGlobalContext } from '../../context';

import './LandingPage.css';

const LandingPage = () => {
  const { mainStores, mainLoading } = useGlobalContext();
  const [page, setPage] = useState(false);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      // console.log(`innerHeight ${window.innerHeight}`);
      // console.log(`scrollY ${window.scrollY}`);
      // console.log(`body height ${document.body.scrollHeight}`);
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        // setPage((oldPage) => {
        //   return oldPage + 1;
        // });
        setPage(true);
        console.log('작업중');
      }
    });
    return () => window.removeEventListener('scroll', event);
  }, []);

  if (mainLoading) {
    return <Loading />;
  }
  return (
    <>
      <SearchBox />
      <NewNavigation />
      <Separator />
    </>
  );
};

export default LandingPage;
