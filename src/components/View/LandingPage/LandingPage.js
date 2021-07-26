import React, { useState } from 'react';

import SearchBox from '../SearchPage/SearchBox';
import SearchResults from '../SearchPage/SearchResults';
import Home from '../../Home';
import RCCMD from './Sections/RCCMD/RCCMD';
import Footer from '../../Footer';

import Separator from '../../Separator';
import Loading from '../../Loading';
import { useGlobalContext } from '../../context';

import './LandingPage.css';

const LandingPage = (history) => {
  const { loading } = useGlobalContext();

  const [userInput, setUserInput] = useState('');

  const getUserInput = (e) => {
    const { value } = e.target;
    console.log('입력받은 값', value);
    setUserInput(value);
  };

  if (loading) {
    return <Loading />;
  } else {
    if (userInput) {
      return (
        <>
          <SearchBox getUserInput={getUserInput} />
          <SearchResults userInput={userInput} />
          <Footer />
        </>
      );
    } else
      return (
        <>
          <SearchBox getUserInput={getUserInput} />
          <Home history={history} />
          <Separator />
          <RCCMD
            title='새로 등록된 곳'
            slideType='type2'
            view='newStores'
            category='맛집'
          />
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
