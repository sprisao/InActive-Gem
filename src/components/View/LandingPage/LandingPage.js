import React, { useState, useEffect } from 'react';

import Header from '../../Header';
import SearchBox from '../SearchPage/SearchBox';
import SearchResults from '../SearchPage/SearchResults';
import NewNavigation from '../../NewNavigation';
import RCCMD from './Sections/RCCMD/RCCMD';
import Footer from '../../Footer';

import Separator from '../../Separator';
import Loading from '../../Loading';
import Intro from '../../Intro';
import { useGlobalContext } from '../../context';

import './LandingPage.css';

const LandingPage = () => {
  const { loading } = useGlobalContext();

  const [userInput, setUserInput] = useState('');

  const getUserInput = (e) => {
    const { value } = e.target;
    setUserInput(value);
  };
  console.log(userInput);

  // if (userInput) {
  //   return;
  //   <>
  //     <Header />
  //     <SearchBox getUserInput={getUserInput} />
  //     <Footer />
  //   </>;
  // }
  if (loading) {
    return <Intro />;
  } else {
    if (userInput) {
      return (
        <>
          <Header />
          <SearchBox getUserInput={getUserInput} />
          <SearchResults userInput={userInput} />
          <Footer />
        </>
      );
    } else
      return (
        <>
          <Header />
          <SearchBox getUserInput={getUserInput} />
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
          <Footer />
        </>
      );
  }
};

export default LandingPage;
